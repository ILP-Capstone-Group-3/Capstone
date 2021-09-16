import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeRequests } from '../models/EmployeeRequests.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http: HttpClient) { }

  storeEmployeeDetailsInfo(employeeRef: any): Observable<any> {
     return this.http.post("http://localhost:4200/admin/addEmployeeDetails", employeeRef, { responseType: "text" })
  }

  deleteEmployeeByEmail(email: any): Observable<any> {
    return this.http.delete("http://localhost:4200/admin/deleteEmployeeByEmail/" + email, { responseType: 'text' });
  }

  storeProductDetailsInfo(productRef: any): Observable<any> {
     return this.http.post("http://localhost:4200/admin/addProductDetails", productRef, { responseType: "text" })
  }

  deleteProductByName(name: any): Observable<any> {
    return this.http.delete("http://localhost:4200/admin/deleteProductByName/" + name, { responseType: 'text' });
  }

   updateProductPrice(productRef:any):any{
    return this.http.put("http://localhost:4200/admin/updateProductPrice",productRef,{responseType:'text'})
  }

  updateProductQuantity(quantityRef:any):any{
    return this.http.put("http://localhost:4200/admin/updateProductQuantity",quantityRef,{responseType:'text'})
  }
    retrieveAllEmployeeRequests(): Observable<EmployeeRequests[]> {
      return this.http.get<EmployeeRequests[]>("http://localhost:4200/admin/allEmployeeRequests");
  }

  updateRequests(updatedRequests: Array<EmployeeRequests>) {
    return this.http.put<{ message: string, employeeRequests: any }>("http://localhost:4200/admin/updateRequests", updatedRequests);
  }

}

