import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RaiseticketService } from '../raiseticket.service';

@Component({
  selector: 'app-raiseticket',
  templateUrl: './raiseticket.component.html',
  styleUrls: ['./raiseticket.component.css']
})
export class RaiseticketComponent implements OnInit {

  ticketRef = new FormGroup({
    name:new FormControl(),
    subject:new FormControl(),
    issue: new FormControl()
  })

  constructor(
    public ticketSer:RaiseticketService,
    public router:Router
  ) { }
  msg?: string;

  ngOnInit(): void {
  }

  submitTicket(){
    let raiseTicket = this.ticketRef.value;
    //console.log(login)
    this.ticketSer.raiseTicketLog(raiseTicket).
    subscribe(result=>{
      if(result=="Account created successfully"){
        this.router.navigate(["userLogin"])
      }else{
          this.msg = result;
      }
      
     },
    error=>console.log(error))

    this.ticketRef.reset();
  }

}
