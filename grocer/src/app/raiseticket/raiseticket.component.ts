import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-raiseticket',
  templateUrl: './raiseticket.component.html',
  styleUrls: ['./raiseticket.component.css']
})
export class RaiseticketComponent implements OnInit {

  constructor(private ticketService:TicketService, private router:Router) { }

  ngOnInit(): void {
  }
  
  // Random ticket id generation
  genRandomId(): number {
    return Math.round(Math.random() * (999999 - 1) + 1);
  }

  submitTicket(ticketRef:NgForm): void {
    let ticketForm = ticketRef.value;
    const ticketObj = {_id:this.genRandomId(), userId:ticketForm.username, description:ticketForm.description};

    this.ticketService.createTicket(ticketObj)
        .subscribe(
          response=> {
            console.log(response);
          },
          error=> {
            console.log(error);
          });
    ticketRef.resetForm();

    alert("Ticket submitted successfully.");
  }

}