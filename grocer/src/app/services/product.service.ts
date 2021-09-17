import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product.model';

// This url is used in manipulating the data. It needs to 
// be the same as the one from the respective router.
const baseUrl = "http://localhost:9090/api/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  // Create a new product
  createProduct(data:any): Observable<any> {
    return this.http.post(`${baseUrl}/save`, data);
  }

  // Get a list of products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}/products`);
  }

}
