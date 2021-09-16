import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {

name:any;
name1:any;
price:any;
quantity:any;

productMessage:any;
quantityMessage:any;

  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
  }
   updateProduct(updateRef: any) {
   console.log(updateRef);
    this.adminService.updateProductPrice(updateRef).subscribe((result:string)=> {
      this.productMessage=result;
     })
    this.name = "";
    this.price = "";
    
    
  }
  updateQuantity(quantityRef: any){
    console.log(quantityRef)
   this.adminService.updateProductQuantity(quantityRef).subscribe((result:string)=> {
      this.quantityMessage=result;
     })
     this.name1= "";
    this.quantity = "";
    
    
  }
}
