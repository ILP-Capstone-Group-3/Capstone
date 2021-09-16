import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RaiseTicketService } from '../raise-ticket.service';


@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {
  ticketRef = new FormGroup({
    name:new FormControl(),
    subject:new FormControl(),
    issue: new FormControl()
  })


  constructor(
    public ticketSer:RaiseTicketService,
    public router:Router) { }
    msg?: string;


  ngOnInit(): void {
  }

  submitTicket(){
    let raiseTicket = this.ticketRef.value;
    //console.log(login)
    this.ticketSer.raiseTicketLog(raiseTicket).
    subscribe(result=>{
      if(result=="Account created successfully"){
        this.router.navigate(["home", raiseTicket.name])
      }else{
          this.msg = result;
      }
      
     },
    error=>console.log(error))

    this.ticketRef.reset();
  }


}
