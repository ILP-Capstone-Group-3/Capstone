import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {
  
  showProgressBar:boolean = true;

  constructor() { }

  ngOnInit(): void {
    
  }

  sendRequest(requestRef:NgForm): void {
    
  }

}
