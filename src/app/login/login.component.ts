import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage:any = null;
  isLogin!:boolean;
  constructor(private _AuthService:AuthService,private _Router:Router)
  {
    if(localStorage.getItem("userToken")!==null)
    {
      _Router.navigate(['home']);
    }
  }
  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)])
  })

  handleLogin(loginForm:FormGroup)
  {

    if(loginForm.valid)
    {
      this.isLogin = true;
      this._AuthService.login(loginForm.value).subscribe({
        next:(Response)=>{
          console.log(Response.token);
          localStorage.setItem("userToken",Response.token)
          this.isLogin=false;
          this._Router.navigate(['/home'])

        },
        error:(err)=>{
          this.isLogin = false;
          this.errorMessage = err.error.message;
        }
      })
    }
  }
}
