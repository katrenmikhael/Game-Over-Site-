import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css']
})
export class AllGamesComponent implements  OnInit {
  allGames!:any[];
  first20Game!:any[];
  second20Game!:any[];
  showSecondPart:boolean = false;
  constructor(private _GameService:GameService)
  {

  }
  ngOnInit(): void {
     this._GameService.getAllGames().subscribe({
      next:(Response)=>
      {
        this.first20Game = Response.slice(0,20);
        this.second20Game = Response.slice(21,31);
        this.allGames = Response
        console.log(Response)
      }
    })

  }
  showReminderGames()
  {
    this.showSecondPart = true;
  }
}
