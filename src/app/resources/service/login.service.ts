import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TraktoAPI } from './../models/response';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


interface TokenResponse {
  access_token: string;
  token_type: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private cookieService: CookieService) {}

  apiurl='https://api.trakto.io/';

  LoginUser(credentials: any): Observable<TokenResponse | { error: string; error_description: string; }>{
    return this.http.post<TraktoAPI>(`${this.apiurl}/auth/signin`, credentials);
  }

  SlideAll(credentials: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.getAccessTokenFromCookie(),
    });
    return this.http.get(`${this.apiurl}/document`, { headers: headers, ...credentials });
  }

  private getAccessTokenFromCookie(): string {
    return this.cookieService.get('token');
  }

}
