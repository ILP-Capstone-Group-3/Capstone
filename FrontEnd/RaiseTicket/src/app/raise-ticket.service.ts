import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {RaiseTicket} from './raise-ticket';
import{Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RaiseTicketService {

  constructor(public http:HttpClient) { }

  raiseTicketLog(raiseticket: RaiseTicket): Observable<any>{
    return this.http.post("http://localhost:9090/api/user/SignUp", raiseticket,
    {responseType:'text'})

  }
}
