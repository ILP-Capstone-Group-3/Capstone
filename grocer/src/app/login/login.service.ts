import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../admin.model';
import { Employee } from '../models/model.employee';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }

  retrieveAllAdminDetails(): Observable<Array<Admin>> {
    return this.http.get<Admin[]>("http://localhost:8080/admin/allAdminDetails");
  }

  // retrieveAllUserDetails(): Observable<Array<User>> {
  //   return this.http.get<User[]>("http://localhost:8080/user/allUserDetails");
  // }

  // retrieveAllEmployeeDetails(): Observable<Array<Employee>> {
  //   return this.http.get<Employee[]>("http://localhost:8080/employee/allEmployeeDetails");
  // }

  // login(userName: any, password: any): Observable<User>{
  //   return this.http.post<User>('http://localhost:8080/user/login', {userName, password});
  // }

  // saveUserToLocal(authUser: User){
  //   localStorage.setItem('auth_user', JSON.stringify(authUser));
  //   return authUser;
  // }

  // getUserFromLocal(): User{
  //   let authUser: User = JSON.parse(localStorage.getItem('auth_user'));
  //   return authUser;
  // }

  // lockUserAccount(loginRef: any): any {
  //   return this.http.put("http://localhost:8080/admin/lockUserAccount", loginRef, { responseType: 'text' })
  // }
}
