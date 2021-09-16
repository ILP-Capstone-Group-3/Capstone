import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToAddEmployeeComponent() {
    console.log("In add employee component");
    this.router.navigate(['./adminPortal/addEmployees']);
  }

  goToDeleteEmployeeComponent() {
    console.log("In delete employee component");
    
  }
}
