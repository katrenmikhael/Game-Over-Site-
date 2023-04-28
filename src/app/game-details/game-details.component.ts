import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit{
  id:any;
  details:any;
  videopath:any;
  constructor(private _ActivateRoute:ActivatedRoute, private _GameService:GameService)
  {

  }
  ngOnInit(): void {
    this._ActivateRoute.paramMap.subscribe((params)=>{
      this.id = params.get('id');
    })
    this._GameService.getGameDetails(this.id).subscribe(
      {
        next:(Response)=>{
          this.details = Response;
          this.videopath = this.details.thumbnail.replace("thumbnail.jpg", "videoplayback.webm");
          console.log(this.details)
        },
        error:(err)=>{console.log(err)},

      }
    )


  }
  showVideo(){
    console.log("show video");
    const el = <HTMLElement>document.querySelector('.video-game');
    el.classList.remove("d-none")
  }
  hideVideo()
  {
    console.log("hide video");
    const el = <HTMLElement>document.querySelector('.video-game');
    el.classList.add("d-none")
  }
}
