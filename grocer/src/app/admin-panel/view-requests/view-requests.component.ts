import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { EmployeeRequests } from 'src/app/models/EmployeeRequests.model';
import { RequestService } from 'src/app/services/request.service';
import { Request } from 'src/app/request.model';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {

  employeeRequests: Array<Request> = [];
  displayedColumns:string[] = ['employeeId', 'product', 'quantity', 'status'];

  constructor(public adminService: AdminService, private requestService:RequestService) { }

  ngOnInit(): void {
    this.requestService.getAllRequests().subscribe(data=> {
      this.employeeRequests = data;
    },
    error=> {
      console.log(error);
    })
  }
}
