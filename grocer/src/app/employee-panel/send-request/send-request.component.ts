import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {
  
  showProgressBar:boolean = true;
  employeeId:number = this.route.snapshot.params["id"];

  constructor(private requestService:RequestService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.showProgressBar = false;
  }

  // Random request id generation
  genRandomId(): number {
    return Math.round(Math.random() * (999999 - 1) + 1);
  }

  sendRequest(requestRef:NgForm): void {
    let requestForm = requestRef.value;
    const requestObj = {_id:this.genRandomId(), employeeId:this.employeeId, product:requestForm.product, quantity:requestForm.quantity};

    this.requestService.createRequest(requestObj).subscribe(response=> {
      console.log(response);
      alert("Request submitted!");
      requestRef.resetForm();
    },
    error=> {
      console.log(error);
    });
  }

}
