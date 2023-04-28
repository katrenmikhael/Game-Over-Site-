import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public _AuthService:AuthService,private _Router:Router){

  }
  logOut()
  {
    localStorage.removeItem("userToken");
    this._Router.navigate(['login'])
  }

}
