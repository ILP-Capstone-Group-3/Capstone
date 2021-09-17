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
    return this.http.post(`${baseUrl}/postOrder`, data);
  }

  // Update an order
  updateOrder(id:number, data:any): Observable<any> {
    return this.http.put(`${baseUrl}/updateOrder/${id}`, data);
  }

  // Retrieve orders
  retrieveOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${baseUrl}/retrieveOrders`);
  }

  // Retrieve by newest
  retrieveNewest(): Observable<Order[]> {
    return this.http.get<Order[]>(`${baseUrl}/newOrders`);
  }

  // Retrieve by oldest
  retrieveOldest(): Observable<Order[]> {
    return this.http.get<Order[]>(`${baseUrl}/oldOrders`);
  }

  // Get deliveries
  retrieveDelivery(): Observable<Order[]> {
    return this.http.get<Order[]>(`${baseUrl}/deliveryOrders`);
  }

  // Retrieve delivered
  retrieveDelivered(): Observable<Order[]> {
    return this.http.get<Order[]>(`${baseUrl}/deliveredOrders`);
  }

  // Retrieve shipped
  retrieveShipped(): Observable<Order[]> {
    return this.http.get<Order[]>(`${baseUrl}/shippedOrders`);
  }

  // Retrieve canceled
  retrieveCanceled(): Observable<Order[]> {
    return this.http.get<Order[]>(`${baseUrl}/canceledOrders`);
  }

  // Get orders by email
  retrieveFromEmail(email:string): Observable<Order[]> {
    return this.http.get<Order[]>(`${baseUrl}/searchOrders/${email}`);
  }
}
