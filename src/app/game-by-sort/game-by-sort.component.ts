import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-by-sort',
  templateUrl: './game-by-sort.component.html',
  styleUrls: ['./game-by-sort.component.css']
})
export class GameBySortComponent implements OnInit {
  sortType!:any;
  first20Game!:any[];
  second20Game!:any[];
  showSecondPart!:boolean;
  constructor(private _ActivatedRoute:ActivatedRoute, private _GameService:GameService)
  {

  }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.sortType =  params.get('sort-by');
      this.getGameBySort();
    })

  }
  getGameBySort()
  {
    this._GameService.getGameSortBy(this.sortType).subscribe({
      next:(Response)=>{
        this.first20Game = Response.slice(0,20);
        this.second20Game = Response.slice(21,41);
        console.log(Response);
      },
      error:(err)=>{console.log(err);}

    })
  }
  showReminderGames()
  {
   this.showSecondPart = true;
  }
}
