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
  getTvShow(name:string): 
  Observable<ITvShowApp[]>{
    return this.httpClient.get<ITvShowData[]>(
      `${environment.baseUrl}api.tvmaze.com/search/shows?q=${name}`
      
    ).pipe(map(data => this.transformToItvshow(data)));
  }
  private transformToItvshow(data: ITvShowData[]) : ITvShowApp[]{
    var i;
    var  array:ITvShowApp[]=[];
    for(i=0;i<data.length; i++){
      // console.log(JSON.stringify(data[i]));
    array[i] = {

      id:data[i].show.id,
       name: data[i].show.name,
      // language: data.language,
      rating:data[i].show.rating.average,
       genres: data[i].show.genres,
      summary: this.replace(data[i].show.summary),
       image:data[i].show.image.medium,
      url:data[i].show.url
      
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
 

  
