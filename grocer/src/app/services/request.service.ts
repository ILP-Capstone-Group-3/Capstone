import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../request.model';

// This url is used in manipulating the data. It needs to 
// be the same as the one from the respective router.
const baseUrl = "http://localhost:9090/api/requests";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }

  // Adds a request
  createRequest(data:any): Observable<any> {
    return this.http.post(`${baseUrl}/`, data);
  }

  // Updates a request by ID
  updateRequest(id:number, data:any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  // Retrieves all requests
  getAllRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(`${baseUrl}/`);
  }

  // Gets a request from the id
  getRequestById(id:number): Observable<Request> {
    return this.http.get<Request>(`${baseUrl}/${id}`);
  }
}
