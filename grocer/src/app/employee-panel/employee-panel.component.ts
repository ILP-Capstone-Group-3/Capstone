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

}
