import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ITvShowData} from './itv-show-data';
import{ ITvShowApp} from './itv-show-app';
import { environment } from 'src/environments/environment';
import { Observable, pipe } from 'rxjs';
import{ map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private httpClient: HttpClient)
 {

  }
  getTvShow(pageNo:number): 
  Observable<ITvShowApp[]>{
    return this.httpClient.get<ITvShowData[]>(
      `${environment.baseUrl}api.tvmaze.com/shows/${pageNo}/episodes`
      
    ).pipe(map(data => this.transformToItvshow(data)));
  }
  private transformToItvshow(data: ITvShowData[]) : ITvShowApp[]{
    var show;
    var  array:ITvShowApp[]=[];
    for(show=0;show<20; show++){
    array[show] = {

      id:data[show].id,
      name: data[show].name,
      // language: data.language,
      // rating: data.rating.average,
      // genres: data.genres,
      summary: this.replace(data[show].summary),
      image: data[show].image.medium,
      url:data[show].url,
      season :data[show].season
      // country: data.network.country.name
    }
  }
  return array;
  }
  private replace (html:string) {

    var div = document.createElement("div");
    div.innerHTML = html;
    return( div.textContent || div.innerText || "");
  }
}
 

  

