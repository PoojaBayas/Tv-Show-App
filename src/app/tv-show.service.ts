import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITvShowData } from './itv-show-data';
import { map} from 'rxjs/operators';
import {ITvShow} from './itv-show';
import {environment} from 'src/environments/environment';
import { Ishow } from './ishow';


@Injectable({
  providedIn: 'root'
})
export class TvShowService implements Ishow {

  constructor(private httpClient: HttpClient) { }
    getShowDetail(searchText :string | number):
    Observable <ITvShow[]> {

      return this.httpClient.get<ITvShowData[]>(
        `${environment.baseUrl}api.tvmaze.com/search/shows?q=${searchText}`
      ).pipe(map(data => this.transformToITvShow(data)));
      
    }
    private transformToITvShow(data :ITvShowData[]): ITvShow[]{
      
      var tvShowArray: ITvShow[] = [];
      for (var i = 0; i < data.length; i++) {
        tvShowArray[i] = {
          name: data[i].show.name,
          language: data[i].show.language,
          genres: data[i].show.genres,
          summary: this.replace(data[i].show.summary),
          image: data[i].show.image === null ? '' : data[i].show.image.medium
        };
      }

      return tvShowArray;
    }
    private replace (html:string) {

      var div = document.createElement("div");
      div.innerHTML = html;
      return( div.textContent || div.innerText || "");
    }
  
}
