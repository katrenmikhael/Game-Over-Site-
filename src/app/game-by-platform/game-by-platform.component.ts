import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-by-platform',
  templateUrl: './game-by-platform.component.html',
  styleUrls: ['./game-by-platform.component.css']
})
export class GameByPlatformComponent implements OnInit{
  platform!:any;
  first20Game!:any[];
  second20Game!:any[];
  showSecondPart!:boolean;
  constructor(private _ActivatedRoute:ActivatedRoute,private _GameService:GameService)
  {

  }
 ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe((params)=>{
    this.platform = params.get('platform');
    this.getPlatformGames();
  })
 }
 getPlatformGames()
 {
    this._GameService.getGameByPlatform(this.platform).subscribe(
      {
        next:(Response)=>{
          this.first20Game = Response.slice(0,20);
          this.second20Game = Response.slice(21,40);
        },
        error:(err)=>{console.log(err)}
      }
    )
 }
 showReminderGames()
 {
  this.showSecondPart = true;
 }
}
