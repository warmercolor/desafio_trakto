import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { LoginService } from '../../resources/service/login.service';
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: jasmine.SpyObj<LoginService>;
  let cookieService: jasmine.SpyObj<CookieService>;

  beforeEach(async () => {
    const loginServiceSpy = jasmine.createSpyObj('LoginService', ['LoginUser']);
    const cookieServiceSpy = jasmine.createSpyObj('CookieService', ['set']);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [
        { provide: LoginService, useValue: loginServiceSpy },
        { provide: CookieService, useValue: cookieServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService) as jasmine.SpyObj<LoginService>;
    cookieService = TestBed.inject(CookieService) as jasmine.SpyObj<CookieService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login service on submit', async () => {
    const loginForm = component.loginForm;
    loginForm.setValue({
      email: 'fulano@gmail.com',
      password: 'password123',
    });

    loginService.LoginUser.and.returnValue(of({
      access_token: 'token123',
      token_type: 'Bearer'
    }));

    component.onSubmit();

    await fixture.whenStable();

    expect(loginService.LoginUser).toHaveBeenCalledOnceWith(loginForm.value);
    expect(cookieService.set).toHaveBeenCalledWith('token', 'token123');
  });

  it('should set error message if form is invalid', () => {
    const loginForm = component.loginForm;
    loginForm.setValue({
      email: '',
      password: '',
    });

    component.onSubmit();

    expect(component.errorMessage).toBe('Os campos de email e senha são obrigatórios');
    expect(loginService.LoginUser).not.toHaveBeenCalled();
  });

  it('should set error message if login fails', () => {
    const loginForm = component.loginForm;
    loginForm.setValue({
      email: 'fulano@gmail.com',
      password: 'password123',
    });

    loginService.LoginUser.and.returnValue(of({
      error: 'invalid_grant',
      error_description: 'Invalid email or password',
    }));

    component.onSubmit();

    expect(component.processing).toBeFalse();
    expect(component.errorMessage).toBe('Login ou senha inválidos');
  });
});
