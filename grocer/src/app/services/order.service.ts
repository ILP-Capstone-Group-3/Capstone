import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../order.model';

// This url is used in manipulating the data. It needs to 
// be the same as the one from the respective router.
const baseUrl = "http://localhost:9090/api/orders";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  // Create a new order
  createOrder(data:any): Observable<any> {
    return this.http.post(`${baseUrl}/`, data);
  }

  // Update an order
  updateOrder(id:number, data:any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  // Retrieve orders
  retrieveOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${baseUrl}/`);
  }

  // Retrieves orders by user id
  retrieveOrdersByUser(id:number): Observable<Order[]> {
    return this.http.get<Order[]>(`${baseUrl}/${id}`);
  }

}
