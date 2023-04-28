import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UserData:any = new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient) {


   }
   register(userData:object):Observable<any>
    {
      return this._HttpClient.post("https://route-ecommerce.onrender.com/api/v1/auth/signup",userData);
    }
    login(userData:object):Observable<any>
    {
      return this._HttpClient.post("https://route-ecommerce.onrender.com/api/v1/auth/signin",userData);
    }

    isLogin():Boolean
    {
      if(localStorage.getItem("userToken"))
      {
        return true;
      }
      else{
        return false;
      }
    }
}
