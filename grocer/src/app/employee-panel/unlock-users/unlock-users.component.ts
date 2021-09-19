import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { UserService } from 'src/app/services/user.service';
import { Ticket } from 'src/app/ticket.model';

@Component({
  selector: 'app-unlock-users',
  templateUrl: './unlock-users.component.html',
  styleUrls: ['./unlock-users.component.css']
})
export class UnlockUsersComponent implements OnInit {

  showProgressBar = true;
  lockedUsers:Array<Ticket> = [];

  constructor(private userService:UserService, private ticketService:TicketService) { }

  ngOnInit(): void {
    this.ticketService.getAll().subscribe(data=> {
      this.lockedUsers = data;
      this.showProgressBar = false;
    },
    error=> {
      console.log(error);
      this.showProgressBar = false;
      alert("An error occurred getting tickets");
    });
  }

  // Closes the ticket corresponding to ticketid
  closeTicket(ticketid:number): void {
    this.ticketService.getTicketById(+ticketid).subscribe(data=> {
      let newTicket = data;
      newTicket.isClosed = true;

      // Change the ticket in the database
      this.ticketService.updateTicket(+ticketid, newTicket).subscribe(response=> {
        alert("Ticket " + ticketid + " closed!");

        this.showProgressBar = true;
        // Update the table
        this.ticketService.getAll().subscribe(data=> {
          this.lockedUsers = data;
          this.showProgressBar = false;
        },
        error=> {
          console.log(error);
          this.showProgressBar = false;
          alert("An error occurred getting tickets");
        });
      },
      error=> {
        console.log(error);
      });

    },
    error=> {
      console.log(error);
    });
    
  }

  // Unlock button function
  unlockUser(ticket:Ticket): void {
    this.showProgressBar = true;

    this.userService.getUserFromId(+ticket.userId).subscribe(data=> {
      let curUser = data;

      // First, unlock the user
      curUser.isLocked = false;
      curUser.attemptedLogins = 0;

      // Unlock the user in the database
      this.userService.updateUser(+ticket.userId, curUser).subscribe(response=> {
        console.log("Unlocked user.");
        console.log(response);

        // Now update the ticket to closed
        this.closeTicket(+ticket.ticketId);

      },
      err=> {
        console.log(err);
      })
    },
    error=> {
      console.log(error);
    });
  }

  // Decline ticket button function
  declineTicket(ticket:Ticket): void {
    this.closeTicket(+ticket.ticketId);
  }

}
