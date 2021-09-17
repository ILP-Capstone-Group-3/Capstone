import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

export interface DialogData {
  uid:number;
}

@Component({
  selector: 'app-register-normal-user',
  templateUrl: './register-normal-user.component.html',
  styleUrls: ['./register-normal-user.component.css']
})
export class RegisterNormalUserComponent implements OnInit {
  // Message for form validation
  registrationMessage:string = "";
  // Default amount of funds for new users
  newUserFunds:number = 100;

  constructor(public router:Router, public dialog:MatDialog, private userService:UserService) { }

  ngOnInit(): void {
    
  }

  // Gets a random number from 100,000 to 999,999
  // TODO: there is a small chance of duplicate ids, find a way to prevent it?
  genRandomId(): number {
    return Math.round(Math.random() * (999999 - 100000) + 100000);
  }

  // Opens a dialog box notifying the user of their ID
  openDialog(userid:number): void {
    this.dialog.open(DialogRegisterDialog, {
      data: {
        uid:userid
      }
    });
  }

  // Called when the user hits the submit button
  registerUser(registerRef:NgForm): void {
    let registerForm = registerRef.value;

    // Make sure the passwords match
    if (registerForm.password != registerForm.repassword) {
      this.registrationMessage = "Error: Passwords do not match";
    }
    // Registration success
    else { 
      // Generate a new user id
      let userId = this.genRandomId();
      this.registrationMessage = "";

      // _id, firstname, lastname, email, dob, address, password, funds, attemptedLogins, isLocked
      let userAccount = {_id:userId, firstname:registerForm.firstname, lastname:registerForm.lastname, 
        email:registerForm.email, dob:registerForm.dob, phone:registerForm.phone, address:registerForm.address, 
        password:registerForm.password, funds:this.newUserFunds, attemptedLogins:0, isLocked:false};
      
      // Time to call the register function for database usage
      this.userService.registerUser(userAccount)
        .subscribe(
          response=> {
            console.log(response);
          },
          error=> {
            console.log(error);
          });

      // Notify the user of their user id
      this.openDialog(userId);
      this.router.navigateByUrl("/userLogin");
    }
  }

}

@Component({
  selector: 'dialog-register',
  templateUrl: 'dialog-register.html'
})
export class DialogRegisterDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data:DialogData) { }
}
