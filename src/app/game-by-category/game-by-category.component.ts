import { Component,OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-by-category',
  templateUrl: './game-by-category.component.html',
  styleUrls: ['./game-by-category.component.css']
})
export class GameByCategoryComponent implements OnInit {
category!:any;
first20Game!:any[];
second20Game!:any[];
showSecondPart!:boolean;
constructor(private _GameService:GameService,private _ActivatedRoute:ActivatedRoute)
{

}
ngOnInit(): void {
this._ActivatedRoute.paramMap.subscribe((params)=>{
  this.category = params.get('category');
  this.getGamesByCategory();
})
}

getGamesByCategory(){
  this._GameService.getGameByCategory(this.category).subscribe({
    next:(Response)=>{
      this.first20Game = Response.slice(0,20);
      this.second20Game = Response.slice(21,40);
      console.log(Response);

    },
    error:(err)=>{console.log(err);}

  })
}

showReminderGames(){
  this.showSecondPart = true;
}
}
