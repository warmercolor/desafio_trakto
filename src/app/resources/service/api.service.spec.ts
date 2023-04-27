import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './api.service';
import { TraktoAPI } from '../models/response';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });
    service=TestBed.inject(LoginService);
    httpMock=TestBed.inject(HttpTestingController);
  });


  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected response when calling LoginUser method', () => {
    const expectedResponse: TraktoAPI={
      access_token: 'example_token',
      token_type: 'Bearer'
    };
    const mockData={
      email: 'example@test.com',
      password: 'example_password'
    };

    service.LoginUser(mockData).subscribe(response => {
      expect(response).toEqual(expectedResponse);
    });

    const request=httpMock.expectOne(`${service.apiurl}/auth/signin`);
    expect(request.request.method).toBe('POST');
    request.flush(expectedResponse);
  });
});
