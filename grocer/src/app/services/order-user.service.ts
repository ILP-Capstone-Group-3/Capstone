import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/Order.model';

const baseUrl = "http://localhost:9090/api/orders";

@Injectable({
  providedIn: 'root'
})
export class OrderUserService {

  constructor(private http:HttpClient) { }

  registerOrder(data:any): Observable<any> {
    return this.http.post(baseUrl,data);
  }

  getOrdersViaUserID(userID:string): Observable<Order[]> {
    return this.http.get<Order[]>(`${baseUrl}/${userID}`);
  }
}
