import { Component } from '@angular/core';
import { ConsumeApiService } from '../service/consume-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  email = '';
  password = '';
  confirmPassword = '';

  constructor(private apiService: ConsumeApiService, private router: Router) { }


  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const resetdata = {
      email: this.email,
      password: this.password
    }

    this.apiService.onResetPassword(resetdata).subscribe({
      next: (Response: any) => {
        console.log("Password reset Successful", Response);
        alert("Password reset Successful");
        this.router.navigate(['/login']);
      },
      error: (error: any) => {
        console.error(error);
        alert("Something went wrong")
      }
    })
  }

}