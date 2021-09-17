import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SendRequestService {

  constructor(private http: HttpClient) { }

  sendRequestToAdmin(product: any) {
    return this.http.post("http://localhost:8080/admin/sendRequestToAdmin", product).pipe(map(res => res));
  }

  getProducts() {
    return this.http.get("http://localhost:8080/product/products").pipe(map((res:any) => res.products));
  }
}
