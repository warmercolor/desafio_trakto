import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {
  let service: AuthGuardService;
  let router: Router;
  let cookieService: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [CookieService],
    });

    service = TestBed.inject(AuthGuardService);
    router = TestBed.inject(Router);
    cookieService = TestBed.inject(CookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should allow access when token is present', () => {
    spyOn(cookieService, 'get').and.returnValue('valid_token');

    const canActivate = service.canActivate(null!, null!);

    expect(canActivate).toBeTrue();
  });

  it('should redirect to login page when token is not present', () => {
    spyOn(cookieService, 'get').and.returnValue('');

    spyOn(router, 'navigate');

    const canActivate = service.canActivate(null!, null!);

    expect(canActivate).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
