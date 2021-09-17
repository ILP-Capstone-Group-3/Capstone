import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee.model';

// This url is used in manipulating the data. It needs to 
// be the same as the one from the respective router.
const baseUrl = "http://localhost:9090/api/employees";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  // Registers an employee to the database
  registerEmployee(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  // Gets an Employee by their _id
  getEmployeeFromId(id:number): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  // Deletes an employee from the database by their _id
  deleteEmployee(id:number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  // Update a employee. Put the new employee details into the data parameter
  updateEmployee(id:number, data:any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
}
