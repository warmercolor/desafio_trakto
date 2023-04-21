import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routes';
import { RouterModule } from '@angular/router';
import { InputComponent } from './../../components/input/input.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InputComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(LoginRoutes)
  ]
})
export class LoginModule { }
