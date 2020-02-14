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
  getTvShow(name: string): 
  Observable<ITvShowApp>{
    return this.httpClient.get<ITvShowData>(
      `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${name}`
    ).pipe(map(data => this.transformToItvshow(data)));
  }
  private transformToItvshow(data: ITvShowData) : ITvShowApp{
    return {
      name: data.name,
      language: data.language,
      rating: data.rating.average,
      genres: data.genres,
      summary: this.replace(data.summary),
      image: data.image.medium,
      country: data.network.country.name
    }
  }
  private replace (html:string) {

    var div = document.createElement("div");
    div.innerHTML = html;
    return( div.textContent || div.innerText || "");
  }
}
 

  

