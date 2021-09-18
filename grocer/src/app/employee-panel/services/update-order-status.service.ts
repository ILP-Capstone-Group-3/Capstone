import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/order.model';

@Injectable({
  providedIn: 'root'
})
export class UpdateOrderStatusService {

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get("http://localhost:8080/order/retrieveOrders").pipe(map((res:any) => res.orders));
  }

  updateOrderStatus(order: Order[]) {
    return this.http.put("http://localhost:8080/order/updateOrders", order).pipe(map((res:any) => res.orders));
  }
}
