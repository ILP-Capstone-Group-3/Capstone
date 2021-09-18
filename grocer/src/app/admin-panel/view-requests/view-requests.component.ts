import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { EmployeeRequests } from 'src/app/models/EmployeeRequests.model';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {

  employeeRequests: Array<EmployeeRequests> = [];
  updatedRequests: Array<EmployeeRequests> = [];

  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.retrieveAllEmployeeRequests().subscribe(result => {
      this.employeeRequests = result;
      console.log(this.employeeRequests)
    })
  }

  changeRequestStatus(status: any, employeeRequests: EmployeeRequests) {
    // console.log(status.target.value);
    employeeRequests.status = status.target.value;
    this.updatedRequests.push(employeeRequests);
  }

  updateRequests() {
    this.adminService.updateRequests(this.updatedRequests).subscribe((result) => {
      console.log(result.message);
      this.employeeRequests.forEach((employeeRequest: EmployeeRequests) => {
        result.employeeRequests.forEach((updatedRequest: EmployeeRequests) => {
          if (employeeRequest._id == updatedRequest._id)
            employeeRequest = updatedRequest;
        });
      })
      this.updatedRequests.splice(0, this.updatedRequests.length);
    });
  }
}
