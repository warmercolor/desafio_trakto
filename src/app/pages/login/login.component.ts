import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../resources/service/login.service';
import { Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  loginSub!: Subscription;
  errorMessage = console.log('');

  constructor(
    private builder: FormBuilder,
    private service: LoginService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnDestroy(): void {
    this.loginSub.unsubscribe();
  }

  loginForm = this.builder.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required]
  });

  onSubmit() {
    this.loginSub = this.service.LoginUser(this.loginForm.value).subscribe(
      res => {
        const token = res.access_token;
        this.cookieService.set('token', token);
        this.router.navigate(['/']);
      },
      error => {
        this.errorMessage = console.log('Email ou senha inválidos');
      }
    );
  }
}
