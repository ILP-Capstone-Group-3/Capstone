import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  // Login error message
  loginErrorMessage:string = "";

  constructor(private userService:UserService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  // Called when the user hits the login button
  checkUser(loginRef:NgForm): void {
    let loginForm = loginRef.value;
    // curUser will be used in database updating, since we update by replacing
    // an existing entry with an entirely new one
    let curUser:any = null;

    // Messages that appear on user mis-input. Feel free to modify their values
    let accountLockedMsg = "Your account has been locked. Please submit a ticket to unlock it.";
    let badInputMsg = "Invalid username or password.";
    
    // Grab the user by the inputted username
    this.userService.getUserFromId(+loginForm.username).subscribe(data=> {
          // User found with a matching ID, lets start playing with the data
          curUser = data;

          // Check to see if they input valid data:
          // Login successful
          if (loginForm.password == curUser.password && !curUser.isLocked) {
            this.loginErrorMessage = "";
            // Navigate to the user panel page
            this.router.navigateByUrl("/userPanel");
          }
          // Account is locked
          else if (curUser.isLocked) {
            this.loginErrorMessage = accountLockedMsg;
            return;
          }
          // Incorrect password
          else {
            // Update the total login attempts
            curUser.attemptedLogins += 1;
            // Determine if we need to lock the account
            if (curUser.attemptedLogins >= 3) {
              curUser.isLocked = true;
              this.loginErrorMessage = accountLockedMsg;
            }
            else {
              this.loginErrorMessage = badInputMsg;
            }
            
            // Updating the database's record of total login attempts for that user id
            // NOTE: updating an entry in the database uses an entirely new object, not 
            //       just updating a single value like in SQL.
            this.userService.updateUser(+loginForm.username, curUser).subscribe(response=> {
              // Display what happened in console
              console.log("Login attempts updated to " + curUser.attemptedLogins);
              console.log(response);
            },
            error=> {
              console.log(error);
            });
          }

        },
        // Account does not exist
        error=> {
          console.log(error);
          this.loginErrorMessage = badInputMsg;
        });
  }

}
