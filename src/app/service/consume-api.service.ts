import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsumeApiService {
  constructor(private http: HttpClient) {}

  onRegister(data: any) {
    return this.http.post("https://localhost:7056/api/Users/register", data);
  };

  onLogin(loggeduser:any){
    return this.http.post("https://localhost:7056/api/Users/login", loggeduser);
  }
  onGetAllUsers() {
    return this.http.get("https://localhost:7056/api/Users");
  }

  onResetPassword(resetdata: any) {
    return this.http.post("https://localhost:7056/api/Users/resetpassword", resetdata);
  }
}
