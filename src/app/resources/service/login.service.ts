import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TraktoAPI } from './../models/response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {}

  apiurl='https://api.trakto.io/';

  LoginUser(data: Object){
    return this.http.post<TraktoAPI>(`${this.apiurl}/auth/signin`, data);
  }
}
