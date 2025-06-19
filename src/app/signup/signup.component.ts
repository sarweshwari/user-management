import { Component } from '@angular/core';
import { Cons } from 'rxjs';
import { ConsumeApiService } from '../service/consume-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  regObj={
     "username": "",
     "email": "",
     "password": "",
     "address": "",
     "gender": "",
     "birthdate": ""
    }
   
    constructor(private consumeApiService: ConsumeApiService) { }
    onSubmit() {
      console.log(this.regObj);
      this.consumeApiService.onRegister(this.regObj).subscribe({
        next: (response:any) => {
          console.log("Registration successful", response);
          alert("Registration successful");
        },
        error: (error:any) => {
          console.error("Registration failed", error);
          alert("Registration failed");
        }
      })
    }
  }