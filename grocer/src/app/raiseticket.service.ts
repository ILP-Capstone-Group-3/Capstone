import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {Raiseticket} from './raiseticket';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaiseticketService {

  constructor(public http:HttpClient) { }

  raiseTicketLog(raiseticket: Raiseticket): Observable<any>{
    return this.http.post("http://localhost:9090/api/ticket/createNewTicket", raiseticket,
    {responseType:'text'})

  }
}
