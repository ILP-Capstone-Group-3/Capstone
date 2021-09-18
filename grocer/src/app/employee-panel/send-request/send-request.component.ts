import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/product.model';
import { SendRequestService } from '../services/send-request.service';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {
  
  products: Product[] = [];

  // TODO: fix this
  /*products: Product[] = [
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
  */

  quantityFormControl = new FormControl();
  showProgressBar = true;

  constructor(
    private sendRequestService: SendRequestService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.sendRequestService.getProducts().subscribe((productsResponse: Product[]) => {
      console.log("products", productsResponse);
      this.showProgressBar = false;
      if(productsResponse.length > 0) {
        this.products = productsResponse;
      }
    })
  }

  sendRequest(product: Product) {
    const updateProductQuantity = {
      name: product.name,
      requestToIncreaseQuantity: this.quantityFormControl.value
    }

    this.showProgressBar = true

    this.sendRequestService.sendRequestToAdmin(updateProductQuantity).subscribe((response: any) => {
      if(response) {
        this.showProgressBar = false;
        console.log("response", response);
        this.quantityFormControl.reset();
        this.snackbar.open('Request sent successfully', '', {duration: 3000});
      }
    }, (error: any) => {
      this.snackbar.open('Error sending request', '', {duration: 3000});
      this.showProgressBar = false;
      console.log("error", error);
    });
  }

}
