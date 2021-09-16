import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user.model';

// This url is used in manipulating the data. It needs to 
// be the same as the one from the respective router.
const baseUrl = "http://localhost:9090/api/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  // Gets a list of all the users currently registered
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }

  // Registers a user to the database
  registerUser(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  // Gets a user by their _id
  getUserFromId(id:number): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  // Update a user. Put the new user details into the data parameter
  updateUser(id:number, data:any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
}
