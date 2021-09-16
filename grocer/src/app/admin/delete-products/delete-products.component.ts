import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent implements OnInit {

name:any;
message:any;

  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
  }
  deleteProduct(deleteRef: any) {
    this.adminService.deleteProductByName(deleteRef.name).subscribe((result: string) => {
      this.message = result;
      })
   this.name = "";
  }
}
