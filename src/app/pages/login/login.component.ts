import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../../resources/service/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  loginForm!: FormGroup;
  loginSub!: Subscription;
  errorMessage = '';
  processing = false;

  constructor(
    private builder: FormBuilder,
    private service: LoginService,
    private router: Router,
    private cookieService: CookieService
  ) {
    this.loginForm = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Os campos de email e senha são obrigatórios';
      return;
    }
    this.processing = true;
    this.loginSub = this.service.LoginUser(this.loginForm.value).subscribe(
      (response: any) => {
        setTimeout(() => {
          this.processing = false;
          const token = response.access_token;
          this.cookieService.set('token', token);
          this.router.navigate(['/']);
        }, 3000);
      },
      (error) => {
        this.processing = false;
        this.errorMessage = 'Login ou senha inválidos';
      }
    );
  }

  ngOnDestroy(): void {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }
}
