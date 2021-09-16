import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-sandbox',
  templateUrl: './admin-sandbox.component.html',
  styleUrls: ['./admin-sandbox.component.css']
})
export class AdminSandboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addEmployee(addEmployeeRef:NgForm): void {
    let employeeForm = addEmployeeRef.value;

  }

  deleteEmployee(delEmployeeRef:NgForm): void {
    let employeeForm = delEmployeeRef.value;

  }

  generateReports(reportRef:NgForm): void {
    
  }

}
