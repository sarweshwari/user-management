import { Component } from '@angular/core';
import { ConsumeApiService } from '../service/consume-api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData={
    email : "",
    password : ""

  }

 //navigate another component
  constructor(private apiService : ConsumeApiService, private router: Router){}
    
  onSubmit(){
    console.log(this.loginData);
    this.apiService.onLogin(this.loginData).subscribe({
      next:(Response: any)=>{
        console.log("User Logged In Successfully", Response);
        alert("User Logged In Successfully");
        this.router.navigate(["/all-users"]);
      },
      error:(error:any)=>{
        console.error("User Credentials invalid", error)
        alert("User Credentials invalid");
      }
    });
  }
}