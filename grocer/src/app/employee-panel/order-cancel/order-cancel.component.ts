import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from 'src/app/models/Order.model';

@Component({
  selector: 'app-order-cancel',
  templateUrl: './order-cancel.component.html',
  styleUrls: ['./order-cancel.component.css']
})
export class OrderCancelComponent implements OnInit {

  cancellationFormControl =  new FormControl('', Validators.required);

  constructor(public dialogRef: MatDialogRef<OrderCancelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { order: Order }) { }

  ngOnInit(): void {
    console.log("order details in dialog", this.data.order);
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    console.log(this.cancellationFormControl.value);
  }

}
