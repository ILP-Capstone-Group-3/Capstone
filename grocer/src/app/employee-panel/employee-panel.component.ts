import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-panel',
  templateUrl: './employee-panel.component.html',
  styleUrls: ['./employee-panel.component.css']
})
export class EmployeePanelComponent implements OnInit {
  loginFlag:boolean=true;
  loginFailFlag:boolean=false;

  mainFlag:boolean=false;

  requestFlag:boolean=false;

  updateFlag:boolean=false;

  unlockFlag:boolean=false;

  passwordFlag:boolean=false;
  editFlag:boolean=false;
  changeFlag:boolean=false;
  editChangedFlag:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  toMain(){
    this.mainFlag=true;
    this.loginFlag=false;
    this.loginFailFlag=false;
    this.requestFlag=false;
    this.updateFlag=false;
    this.unlockFlag=false;
    this.passwordFlag=false;
    this.editFlag=false;
    this.changeFlag=false;
    this.editChangedFlag=false;
  }

  refuseToChangePassword(){
    this.passwordFlag=false;
    this.loginFlag=true;
  }

  toRequest(){
    this.mainFlag=false;
    this.requestFlag=true;
  }

  toUpdate(){
    this.mainFlag=false;
    this.updateFlag=true;
  }

  toUnlock(){
    this.mainFlag=false;
    this.unlockFlag=true;
  }

  toEditProfile(){
    this.mainFlag=false;
    this.passwordFlag=true;
    this.editFlag=true;
  }

  logout(){
    this.mainFlag=false;
    this.loginFlag=true;
  }

}
