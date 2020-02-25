import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ishow } from './ishow';
import { ITvShow } from './itv-show';

@Injectable({
  providedIn: 'root'
})
export class TvshowfakeService {/*?implements Ishow{
  private fakeShow: ITvShow= {
    name: "Friends",
    language: "English",
    genres: "Comedy",
    summary: "Show",
    image: "IMG",
  }

  constructor() { }
  public getShowDetail(searchText: string | number):Observable<ITvShow[]>{
    return of(this.fakeShow);
  }
}*/}