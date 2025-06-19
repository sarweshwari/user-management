import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { ProfileComponent } from './profile/profile.component';
import { AllUserComponent } from './all-user/all-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
 {
  path: 'login', component:LoginComponent
 },
 {
  path: "signup" , component:SignupComponent
 },
 {
    path: "" , component:SignupComponent
 },
 {
  path: "edit" , component:EditComponent
 },
 {
  path: "profile" , component:ProfileComponent
 },
 {
  path: "all-users" , component:AllUserComponent
 },
 {
  path: "reset" , component:ResetPasswordComponent
 }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
