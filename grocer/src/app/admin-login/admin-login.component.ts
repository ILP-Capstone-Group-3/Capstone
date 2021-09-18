import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginErrorMessage:string = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  checkUser(loginRef:NgForm): void {
    let loginForm = loginRef.value;
    let username = loginForm.username;
    let password = loginForm.password;

    if (username == "admin" && password == "admin123") {
      this.router.navigateByUrl("/adminPanel");
    }
    else {
      this.loginErrorMessage = "Incorrect credentials";
    }
  }

}
