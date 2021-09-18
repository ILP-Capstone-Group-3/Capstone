import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  loginErrorMessage:string = "";

  //flags to change "pages"
  signInFlag:boolean=true;
  firstLoginFlag:boolean=false;
  mainPageFlag:boolean=false;

  //string for login Message and update password
  loginMessage:string="";
  changePasswordMessage:string="";

  //Holds the employee's login information
  employeeId:number=-1;
  employeeDefaultPass:string=""; //used for first login

  firstLogin:boolean=true;//replace these later
  password:string="123";

  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  // Called when the user hits the login button
  //Check the employee upon logging in
  checkEmployee(loginRef:NgForm): void {
    let loginForm = loginRef.value;

    let curEmployee: any = null;
    //Get the employee
    this.employeeService.getEmployeeFromId(+loginForm.username).subscribe(data=> {
      curEmployee=data;

      //check if password matches
      if(loginForm.password==curEmployee.password){
        this.loginMessage="";
        this.signInFlag=false; //Disable sign in page
        //determine page to go to
        if(curEmployee.hasDefaultPass){ 
          this.firstLoginFlag=true;
          this.employeeId= +loginForm.username;
          this.employeeDefaultPass=curEmployee.password; //hold this to force emp to change
        }
        else {
          // Navigate to the employee panel page
          let url = "/employeePanel/"+loginForm.username;
          this.router.navigateByUrl(url);
          //this.mainPageFlag = true;
        }
      }
      else{this.loginMessage="Login Failed"}
    },
    error=> {
      console.log(error);
      this.loginMessage="Login Failed";
    });
  }

  //Update the password upon first sign in
  updateFirstPassword(updatePassRef:NgForm): void {
    let updatePassForm = updatePassRef.value;
    //If they do not match, do not let anything happen
    if(updatePassForm.password!=updatePassForm.repassword){
      this.changePasswordMessage="Passwords do not match!"
    }
    else if(updatePassForm.password==this.employeeDefaultPass){
      //Force the employee to change it
      this.changePasswordMessage="You must change the password from the default."
    }
    else{
      //Otherwise, let's update
      let curEmployee: any = null;
      this.employeeService.getEmployeeFromId(this.employeeId).subscribe(data=>{
        curEmployee=data;
        curEmployee.password=updatePassForm.password;
        curEmployee.hasDefaultPass=false;
        this.employeeService.updateEmployee(this.employeeId,curEmployee).subscribe(response=>{
          this.firstLoginFlag=false;
          //this.mainPageFlag=true;
          this.changePasswordMessage="";
          // Navigate to the employee panel page
          let url = "/employeePanel/"+this.employeeId;
          this.router.navigateByUrl(url);
        },
        error=>{
          console.log(error);
          this.changePasswordMessage="There was an error changing your password."
        });
      },
      error=>{
        console.log(error);
        this.changePasswordMessage="There was an error changing your password."
      })
    }
  }

}
