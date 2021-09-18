import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../ticket.model';

// This url is used in manipulating the data. It needs to 
// be the same as the one from the respective router.
const baseUrl = "http://localhost:9090/api/tickets";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  // From Matthew:
  // I could not implement all the functions provided as
  // it is unclear of their purpose. Check the ticket router 
  // for more details.

  constructor(private http:HttpClient) { }

  // Creates a new ticket
  createTicket(data:any): Observable<any> {
    return this.http.post(`${baseUrl}/createNewTicket`, data);
  }

  // Gets every ticket
  getAll(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${baseUrl}/allDatabaseTicket`);
  }

  // Gets a ticket by id
  getTicketById(id:number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${baseUrl}/getSingleTicket/${id}`);
  }

  // Gets a list of tickets based on user ID
  getTicketByUser(userId:number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${baseUrl}/allUserTickets/${userId}`);
  }

  // Deletes a ticket based on its id
  deleteTicket(id:number): Observable<any> {
    return this.http.delete(`${baseUrl}/deleteTicket/${id}`);
  }

}
