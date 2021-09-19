import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/order.model';
import { OrderService } from 'src/app/services/order.service';
import { OrderCancelComponent } from '../order-cancel/order-cancel.component';

@Component({
  selector: 'app-update-order-status',
  templateUrl: './update-order-status.component.html',
  styleUrls: ['./update-order-status.component.css']
})
export class UpdateOrderStatusComponent implements OnInit {

  orderStatus = ["Shipped", "Out for delivery", "Delivered", "Cancelled"];
  orders:Order[] = [];

  showProgressBar = true;


  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    // Initialize the orders
    this.orderService.retrieveOrders().subscribe(data=> {
      this.orders = data;
      this.showProgressBar = false;
      console.log(data);
    },
    error=> {
      console.log(error);
    });
  }

  // Function called to update an order
  updateOrder(order:Order, newStatus:string): void {
    let newOrder = order;
    newOrder.status = newStatus;

    // Update the order in the database
    this.orderService.updateOrder(order.orderId, newOrder).subscribe(response=> {
      console.log(response);
      alert("Order updated successfully!");
    },
    error=> {
      console.log(error);
    });

  }

}
