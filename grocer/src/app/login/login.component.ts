import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Admin } from 'src/app/models/model.admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public loginService: LoginService) { }

  userName: any;
  password: any;
  adminDetails?: any;
  userDetails?: any;
  employeeDetails?: any;
  message: String | undefined;
  loginSuccess: Boolean = false;
  lockedUser: Boolean = false;
  numberOfAttempts: number | undefined;

  ngOnInit(): void {
    sessionStorage.loginObject = "";
    this.numberOfAttempts = 0;
  }

  checkUser(loginRef: any) {

    let userName = loginRef.userName;
    let password = loginRef.password;

    
     
      this.loginService.retrieveAllAdminDetails().subscribe(result => {
        this.adminDetails = result;
   //     console.log(this.adminDetails);
        let keepChecking = true;
        this.adminDetails.forEach((data: { username: any; password: any; }) => {
          if (keepChecking) {
            if (userName == data.username && password == data.password) {
              this.loginSuccess = true;
              sessionStorage.loginObject = JSON.stringify(data);
              keepChecking = false;
              console.log(data);
            } else {
              this.loginSuccess = false;
            }
          }
        })

        if (this.loginSuccess) {
          this.router.navigate(['./adminPortal/addProducts']);
        } else {
          this.message = "Please enter the correct details";
        }

      });

    

    this.userName = "";
    this.password = "";
  }


}
