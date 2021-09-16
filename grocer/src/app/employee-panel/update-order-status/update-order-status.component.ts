import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/app/models/Order.model';
import { OrderCancelComponent } from '../order-cancel/order-cancel.component';

@Component({
  selector: 'app-update-order-status',
  templateUrl: './update-order-status.component.html',
  styleUrls: ['./update-order-status.component.css']
})
export class UpdateOrderStatusComponent implements OnInit {

  orderStatus = ["Shipped", "Out for delivery", "Delivered", "Cancelled"];

  orders: Order[] = [
    {
      _id: "813yhenjidkwshd1",
      _userId: "uiashddsa",
      date: new Date(),
      email: "user@gmail.com",
      orderItems: [
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "pepper",
            price: 5,
            quantity: 1
          }
        },
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "salt",
            price: 5,
            quantity: 1
          }
        },
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "rice",
            price: 5,
            quantity: 1
          }
        },
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "bread",
            price: 5,
            quantity: 1
          }
        }
      ],
      status: "Shipped",
      userName: "Max"
    },
    {
      _id: "8132179eghuijsdyhenjidkwshd1",
      _userId: "uhodasuiashddsa",
      date: new Date(),
      email: "user2@gmail.com",
      orderItems: [
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "pepper",
            price: 5,
            quantity: 1
          }
        },
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "salt",
            price: 5,
            quantity: 1
          }
        },
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "rice",
            price: 5,
            quantity: 1
          }
        },
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "bread",
            price: 5,
            quantity: 1
          }
        }
      ],
      status: "Delivered",
      userName: "Sheldon"
    },
    {
      _id: "813yhenjidkwshd1",
      _userId: "uiashddsa",
      date: new Date(),
      email: "user@gmail.com",
      orderItems: [
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "pepper",
            price: 5,
            quantity: 1
          }
        },
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "salt",
            price: 5,
            quantity: 1
          }
        },
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "rice",
            price: 5,
            quantity: 1
          }
        },
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "bread",
            price: 5,
            quantity: 1
          }
        }
      ],
      status: "Shipped",
      userName: "Max"
    },
    {
      _id: "8132179eghuijsdyhenjidkwshd1",
      _userId: "uhodasuiashddsa",
      date: new Date(),
      email: "user2@gmail.com",
      orderItems: [
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "pepper",
            price: 5,
            quantity: 1
          }
        },
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "salt",
            price: 5,
            quantity: 1
          }
        },
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "rice",
            price: 5,
            quantity: 1
          }
        },
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "bread",
            price: 5,
            quantity: 1
          }
        }
      ],
      status: "Delivered",
      userName: "Sheldon"
    },
    {
      _id: "813yhenjidkwshd1",
      _userId: "uiashddsa",
      date: new Date(),
      email: "user@gmail.com",
      orderItems: [
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "pepper",
            price: 5,
            quantity: 1
          }
        },
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "salt",
            price: 5,
            quantity: 1
          }
        },
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "rice",
            price: 5,
            quantity: 1
          }
        },
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "bread",
            price: 5,
            quantity: 1
          }
        }
      ],
      status: "Shipped",
      userName: "Max"
    },
    {
      _id: "8132179eghuijsdyhenjidkwshd1",
      _userId: "uhodasuiashddsa",
      date: new Date(),
      email: "user2@gmail.com",
      orderItems: [
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "pepper",
            price: 5,
            quantity: 1
          }
        },
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "salt",
            price: 5,
            quantity: 1
          }
        },
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "rice",
            price: 5,
            quantity: 1
          }
        },
        {
          Quantity: 2,
          product: {
            _id: "bhdjk1b213",
            description: "sample",
            imageUrl: "image url",
            name: "bread",
            price: 5,
            quantity: 1
          }
        }
      ],
      status: "Delivered",
      userName: "Sheldon"
    }
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log("orders", this.orders);
  }

  orderStatusChange(status: any, order: Order) {
    console.log("status", status, order);
    if(status === "Cancelled") {
      const dialogRef = this.dialog.open(OrderCancelComponent, {
        panelClass: "",
        width: "540px",
        data: {
          order
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log("Result Obtained ", result);
        if (result === undefined || result === "") {
        } else {
          // service call code should be written here
        }
      });
    }
  }

}
