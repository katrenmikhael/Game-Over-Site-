import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  Headers ={'X-RapidAPI-Key':
  'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
   'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}

  constructor(private _HttpClient:HttpClient) {

  }

  getAllGames():Observable<any>
  {
    return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games',{headers: {'X-RapidAPI-Key':
    'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
     'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}});
  }
  getGameDetails(id:number):Observable<any>
  {
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{headers: {'X-RapidAPI-Key':
    'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
     'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}})
  }
  getGameByPlatform(platform:string):Observable<any>
  {
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platform}`,{headers: {'X-RapidAPI-Key':
    'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
     'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}})
  }
  getGameSortBy(sortType:string):Observable<any>
  {
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${sortType}`,{
      headers: {'X-RapidAPI-Key':
    'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
     'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
    })
  }
  getGameByCategory(category:string):Observable<any>
  {
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,{
      headers: {'X-RapidAPI-Key':
    'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
     'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
    })
  }
}
