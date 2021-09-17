import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-panel',
  templateUrl: './employee-panel.component.html',
  styleUrls: ['./employee-panel.component.css']
})
export class EmployeePanelComponent implements OnInit {

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



  constructor(public router:Router, private EmployeeService:EmployeeService) { }

  ngOnInit(): void {
  }

  developerCreateEmployee(): void {
    let fakeEmployee = {_id:8675309,firstname:"Jane",lastname:"Doe",email:"fakeEmail@yahoo.com",password:"123",hasDefaultPass:true};
    this.EmployeeService.registerEmployee(fakeEmployee)
      .subscribe(
        response=> {
          console.log(response);
          console.log("Fake employee created");
        },
        error=> {
          console.log(error);
        });
  }

  resetFakeEmployee(): void{
    let fakeEmployee = {_id:8675309,firstname:"Jane",lastname:"Doe",email:"fakeEmail@yahoo.com",password:"123",hasDefaultPass:true};
    this.EmployeeService.updateEmployee(8675309,fakeEmployee)
      .subscribe(
        response=> {
          console.log(response);
          console.log("Fake Employee reset");
        },
        error=> {
          console.log(error);
        }
      )
  }


    //Check the employee upon logging in
  checkEmployee(loginRef:NgForm): void {
    let loginForm = loginRef.value;

    let curEmployee: any = null;
    //Get the employee
    this.EmployeeService.getEmployeeFromId(+loginForm.username).subscribe(data=> {
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
        else this.mainPageFlag = true;
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
      this.EmployeeService.getEmployeeFromId(this.employeeId).subscribe(data=>{
        curEmployee=data;
        curEmployee.password=updatePassForm.password;
        curEmployee.hasDefaultPass=false;
        this.EmployeeService.updateEmployee(this.employeeId,curEmployee).subscribe(response=>{
          this.firstLoginFlag=false;
          this.mainPageFlag=true;
          this.changePasswordMessage="";
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

  //Allows log out
  employeeLogout():void {
    this.mainPageFlag=false;
    this.signInFlag=true;
  }

}
