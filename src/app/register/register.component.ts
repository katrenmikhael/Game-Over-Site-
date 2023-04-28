import { Component } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errorMessage:any = null;
  isRegister!:boolean;
  constructor(private _AuthService:AuthService,private _Router:Router)
  {
    if(localStorage.getItem("userToken")!==null)
    {
      _Router.navigate(['home']);
    }
  }
registerForm:FormGroup = new FormGroup({
  name:new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(10)]),
  email:new FormControl(null,[Validators.required, Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
  rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
  phone:new FormControl(null,[Validators.required, Validators.pattern(/^01[0215][0-9]{8}/)]),

},{validators: this.passwordMAtch})

  passwordMAtch(registerForm:any)
  {
    let passwordControl = registerForm?.get('password');
    let rePasswordControl = registerForm?.get('rePassword');
    if(passwordControl?.value === rePasswordControl?.value)
    {
      return null;
    }
    else{
      rePasswordControl?.setErrors({repasswordMatch:'repassword donot match'});
      return {repasswordMatch:'repassword donot match'};
    }
  }

  handleRegister(registerForm:FormGroup)
  {

    if(registerForm.valid)
    {
      this.isRegister =true;
      this._AuthService.register(registerForm.value).subscribe(
        {

          next:(response)=>{
            this.isRegister=false;
            if(response.message ==='success')
            {
              this._Router.navigate(['/login'])

            }
          },
          error:(err)=>{
            this.isRegister=false;

            this.errorMessage = err.error.message;
          }
        }
      )
    }
  }
}
