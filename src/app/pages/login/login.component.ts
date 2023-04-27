import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ServiceTrakto } from '../../resources/service/api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  loginSub!: Subscription;
  errorMessage='';
  processing=false;
  requestFailed=false;

  constructor(
    private builder: FormBuilder,
    private service: ServiceTrakto,
    private router: Router,
    private cookieService: CookieService
  ) {
    this.loginForm=this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.errorMessage='Os campos de email e senha são obrigatórios';
      return;
    }
    this.processing=true;
    this.loginSub=this.service.LoginUser(this.loginForm.value).pipe(
      catchError((error) => {
        this.processing=false;
        this.errorMessage='Login ou senha inválidos';
        this.requestFailed=true;
        return throwError(error);
      })
    ).subscribe(
      (response: any) => {
        this.processing=false;
        const token=response.access_token;
        this.cookieService.set('token', token);
        this.router.navigate(['/']);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }
}
