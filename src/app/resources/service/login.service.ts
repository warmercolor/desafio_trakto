import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TraktoAPI } from './../models/response';
import { Observable } from 'rxjs';


interface TokenResponse {
  access_token: string;
  token_type: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {}

  apiurl='https://api.trakto.io/';

  LoginUser(credentials: any): Observable<TokenResponse | { error: string; error_description: string; }>{
    return this.http.post<TraktoAPI>(`${this.apiurl}/auth/signin`, credentials);
  }
}
