import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EditProileService {

  constructor(private http: HttpClient) { }

  editProfile(profile: any) {
    return this.http.put("http://localhost:8080/employee/updateEmployeePassword", profile).pipe(map(res => res));
  }
}
