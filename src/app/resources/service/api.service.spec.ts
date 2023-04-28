import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServiceTrakto } from './api.service';
import { TraktoAPI } from '../models/response';
import { CookieService } from 'ngx-cookie-service';
import { HttpErrorResponse } from '@angular/common/http';

describe('ServiceTrakto', () => {
  let service: ServiceTrakto;
  let httpMock: HttpTestingController;
  let cookieService: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServiceTrakto, CookieService]
    });
    service=TestBed.inject(ServiceTrakto);
    httpMock=TestBed.inject(HttpTestingController);
    cookieService=TestBed.inject(CookieService);
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

  it('should call SlideAll method with correct headers', () => {
    const mockData={
      sort: 'asc',
      limit: 10
    };

    const mockToken = 'example_token';
    spyOn(cookieService, 'get').and.returnValue(mockToken);

    service.SlideAll(mockData).subscribe();

    const request=httpMock.expectOne(`${service.apiurl}/document`);
    expect(request.request.method).toBe('GET');
    expect(request.request.headers.get('Authorization')).toBe('Bearer ' + mockToken);
  });

  it('should call Profile method with correct headers', () => {
    const mockData={
      fields: ['email', 'name']
    };

    const mockToken = 'example_token';
    spyOn(cookieService, 'get').and.returnValue(mockToken);

    service.Profile(mockData).subscribe();

    const request=httpMock.expectOne(`${service.apiurl}/auth/profile`);
    expect(request.request.method).toBe('GET');
    expect(request.request.headers.get('Authorization')).toBe('Bearer ' + mockToken);
  });

  it('should call ClearCookie method', () => {
    spyOn(cookieService, 'delete');

    service.ClearCookie();

    expect(cookieService.delete).toHaveBeenCalledWith('token');
  });

  it('should handle http error safely when calling LoginUser method', () => {
    const mockData = {
      email: 'example@test.com',
      password: 'example_password'
    };

    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });

    service.LoginUser(mockData).subscribe(
      () => fail('should have failed with 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.error).toEqual('test 404 error');
        expect(error.status).toEqual(404);
      }
    );

    const request = httpMock.expectOne(`${service.apiurl}/auth/signin`);
    request.flush('test 404 error', { status: 404, statusText: 'Not Found' });
  });

  it('should handle http error safely when calling SlideAll method', () => {
    const mockData = {
      sort: 'asc',
      limit: 10
    };

    const errorResponse = new HttpErrorResponse({
      error: 'test 500 error',
      status: 500,
      statusText: 'Server Error'
    });

    service.SlideAll(mockData).subscribe(
      () => fail('should have failed with 500 error'),
      (error: HttpErrorResponse) => {
        expect(error.error).toEqual('test 500 error');
        expect(error.status).toEqual(500);
      }
    );

    const request = httpMock.expectOne(`${service.apiurl}/document`);
    request.flush('test 500 error', { status: 500, statusText: 'Server Error' });
  });

  it('should handle http error safely when calling Profile method', () => {
    const mockData = {
      fields: ['email', 'name']
    };

    const errorResponse = new HttpErrorResponse({
      error: 'test 401 error',
      status: 401,
      statusText: 'Unauthorized'
    });

    service.Profile(mockData).subscribe(
      () => fail('should have failed with 401 error'),
      (error: HttpErrorResponse) => {
        expect(error.error).toEqual('test 401 error');
        expect(error.status).toEqual(401);
      }
    );

    const request = httpMock.expectOne(`${service.apiurl}/auth/profile`);
    request.flush('test 401 error', { status: 401, statusText: 'Unauthorized' });
  });
});
