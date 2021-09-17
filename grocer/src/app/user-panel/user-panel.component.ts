import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor(public router:Router, private userService:UserService, private route:ActivatedRoute) { }

  //Strings used for the html page
  orderTable:string="";
  editResponse:string="";
  currentFunds:string="$"
  fundsErrorMessage:string="";

  userId:number=this.route.snapshot.params["id"];


  
  displayedColumns = ['item', 'status'];
  dataSource: any;


  //Function used to get all the user's orders
  orderStatus(): void {
    let order=[{item:"Cake",quantity:5,status:"Thrown off cliff"}];
    this.dataSource=order;
  }

  getStartingFunds(): void{
    let curUser:any = null;
    //get the funds currently on the profile.
    this.userService.getUserFromId(this.userId).subscribe(data=>{
      //we have found the user.
      curUser = data;
      this.currentFunds="$"+curUser.funds.toString()
    },
    error=> {
      console.log(error);
    })

    //By default, let's assume it's five bucks
  }


  ngOnInit(): void {
    this.orderStatus();
    this.getStartingFunds();
  }

  //Helper function to check if edit profile stuff is empty or not
  checkIfEmpty(newProfileStuff:any): boolean {
    if(newProfileStuff=="" || newProfileStuff==null) return true;
    else return false;
  }

  //function used to edit the profile of the user
  editProfile(editUserRef:NgForm): void {
    let newProfileValue = editUserRef.value;
    editUserRef.resetForm();
    
    let curUser:any = null;

    this.userService.getUserFromId(this.userId).subscribe(data=>{
      curUser = data;
      let passwordMismatch = false;
      let updatedValue = false;

      //Checks through all fields to see if there's something to be updted
      if(!this.checkIfEmpty(newProfileValue.password)){
        if(newProfileValue.password==newProfileValue.repassword) {
          curUser.password = newProfileValue.password;
          updatedValue = true;
        } 
        else passwordMismatch = true;
      }
      if(!this.checkIfEmpty(newProfileValue.address)){
        curUser.address=newProfileValue.address;
        updatedValue=true;
      }
      if(!this.checkIfEmpty(newProfileValue.phone)){
        curUser.phone=newProfileValue.phone;
        updatedValue=true;
      }
      if(!this.checkIfEmpty(newProfileValue.email)){
        curUser.email=newProfileValue.email;
        updatedValue=true;
      }

      //If there is something to be updated, update it.
      if(updatedValue){
        this.userService.updateUser(this.userId,curUser).subscribe(response=>{
          this.editResponse="Profile updated!";
        if(passwordMismatch) this.editResponse+=" However, your password failed to be changed due to a mismatch."
        },
        error=>{
          console.log(error);
          this.editResponse="There was an error updating your profile."
        })
      }
      else{
        this.editResponse="Profile failed to updated.";
        if(passwordMismatch) this.editResponse+=" Passwords did not match."
      }
    },
    error=>{
      console.log(error);
      this.editResponse="Profile failed to be updated.";
    })


  }

  //Allows the user to add funds.
  updateFunds(additionalFundsForm:NgForm):void {
    let curUser:any = null;
    let additionalFunds = additionalFundsForm.value.funds;
    this.userService.getUserFromId(this.userId).subscribe(data=>{
      //we have found the user.
      curUser = data;
      curUser.funds+=additionalFunds;
      //update their funds
      this.userService.updateUser(this.userId,curUser).subscribe(response=> {
        this.currentFunds="$"+curUser.funds.toString();
        this.fundsErrorMessage="";
      },
      error=>{
        console.log(error);
        this.fundsErrorMessage="Funds failed to be updated."
      });
    },
    error=> {
      //If there is an error
      console.log(error);
      this.fundsErrorMessage="Funds failed to be updated."
    })
  }

}
