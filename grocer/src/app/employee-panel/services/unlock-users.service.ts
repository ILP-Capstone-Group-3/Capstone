import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnlockUsersService {

  constructor(private http: HttpClient) { }

  getLockedUsers() {
    return this.http.get("http://localhost:8080/user/allUserDetails").pipe(map((res: any) => res));
  }

  unlockUser(userName: string) {
    const body = {
      userName: userName
    }
    return this.http.put("http://localhost:8080/admin/unlockUserAccount", body).pipe(map((res: any) => res));
  }
}
