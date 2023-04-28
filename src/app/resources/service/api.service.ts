import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TraktoAPI } from '../models/response';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { RequestLogin } from '../models/requestLogin';


interface TokenResponse {
  access_token: string;
  token_type: string;
}
@Injectable({
  providedIn: 'root'
})
export class ServiceTrakto {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  public apiurl='https://api.trakto.io/';

  private getAccessTokenFromCookie(): string {
    return this.cookieService.get('token');
  }

  LoginUser(credentials: RequestLogin): Observable<TokenResponse|{ error: string; error_description: string; }> {
    return this.http.post<TraktoAPI>(`${this.apiurl}/auth/signin`, credentials);
  }

  SlideAll(credentials: Object): Observable<any> {
    const headers=new HttpHeaders({
      'Authorization': 'Bearer '+this.getAccessTokenFromCookie(),
    });
    return this.http.get(`${this.apiurl}/document`, { headers: headers, ...credentials });
  }

  Profile(credentials: Object): Observable<any> {
    const headers=new HttpHeaders({
      'Authorization': 'Bearer '+this.getAccessTokenFromCookie(),
    });
    return this.http.get(`${this.apiurl}/auth/profile`, { headers: headers, ...credentials });
  }

  ClearCookie(): void {
    return this.cookieService.delete('token')
  }
}
