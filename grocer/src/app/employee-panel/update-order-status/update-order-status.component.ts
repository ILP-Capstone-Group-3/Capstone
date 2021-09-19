import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/app/order.model';
import { OrderCancelComponent } from '../order-cancel/order-cancel.component';
import { UpdateOrderStatusService } from '../services/update-order-status.service';

@Component({
  selector: 'app-update-order-status',
  templateUrl: './update-order-status.component.html',
  styleUrls: ['./update-order-status.component.css']
})
export class UpdateOrderStatusComponent implements OnInit {

  orderStatus = ["Shipped", "Out for delivery", "Delivered", "Cancelled"];
  orders: Order[] = [];

  showProgressBar = true;

  // orders: Order[] = [];
  constructor(
    private dialog: MatDialog,
    private orderService: UpdateOrderStatusService
  ) { }

  ngOnInit(): void {
    // console.log("orders", this.orders);
    this.orderService.getOrders().subscribe((ordersResponse: Order[]) => {
      console.log("orders response", ordersResponse);
      this.showProgressBar = false;
      if(ordersResponse.length > 0) {
        this.orders = ordersResponse;
      }
    });
  }

  orderStatusChange(status: any, order: Order) {
    console.log("status", status, order);
    this.showProgressBar = true;
    if(status === "Cancelled") {
      const dialogRef = this.dialog.open(OrderCancelComponent, {
        panelClass: "",
        width: "540px",
        data: {
          order
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.showProgressBar = false;
        console.log("Result Obtained ", result);
        if (result === undefined || result === "") {
        } else {
          // service call code should be written here
        }
      });
    } else {
      order.status = status;
      const orders = [order];
      this.orderService.updateOrderStatus(orders).subscribe((ordersResponse: Order[]) => {
        console.log("orders response", ordersResponse);
        this.showProgressBar = false;
        this.orderService.getOrders().subscribe((ordersResponse: Order[]) => {
          console.log("orders response", ordersResponse);
          this.orders = ordersResponse;
        });
      });
    }
  }

}
