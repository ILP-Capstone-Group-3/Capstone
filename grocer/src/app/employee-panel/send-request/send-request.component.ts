import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {

  products: Product[] = [
    {
      _id: "bhdjk1b213",
      description: "sample",
      imageUrl: "image url",
      name: "pepper",
      price: 4,
      quantity: 1
    },
    {
      _id: "bhdjk1b213",
      description: "sample",
      imageUrl: "image url",
      name: "salt",
      price: 5,
      quantity: 5
    },
    {
      _id: "bhdjk1b213",
      description: "sample",
      imageUrl: "image url",
      name: "rice",
      price: 50,
      quantity: 100
    },
    {
      _id: "bhdjk1b213",
      description: "sample",
      imageUrl: "image url",
      name: "bread",
      price: 25,
      quantity: 500
    }
  ];

  quantityFormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  quantityAdd(quantity: number) {
    if(quantity > 0) {

    }
  }

  sendRequest(product: Product) {

  }

}
