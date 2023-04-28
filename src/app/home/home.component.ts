import { Component ,OnInit } from '@angular/core';
import { GameService } from '../game.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firstThreeGames:any;
  constructor(private _GameService:GameService,private _Router:Router){
  }
  ngOnInit(): void {
    this.getAllGames()

  }
  getAllGames()
  {
    this._GameService.getAllGames().subscribe({
      next:(Response)=>{
        this.firstThreeGames = Response.slice(1,4)
        console.log(this.firstThreeGames)
        console.log("okkkk");

      },
      error:(err)=>{
        console.log("errorr")
        console.log(err)}
    })
  }
  gameDetails(id:string)
  {

  }
}
