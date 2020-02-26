import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ITvShowData } from "./itv-show-data";
import { ITvShowApp } from "./itv-show-app";
import { environment } from "src/environments/environment";
import { Observable, pipe } from "rxjs";
import { map } from "rxjs/operators";
import { ITvShowService } from "./itv-show-service";

@Injectable({
  providedIn: "root"
})
export class TvShowService implements ITvShowService {
  constructor(private httpClient: HttpClient) {}
  getTvShow(searchText: string): Observable<ITvShowApp[]> {
    return this.httpClient
      .get<ITvShowData[]>(
        `${environment.baseUrl}api.tvmaze.com/search/shows?q=${searchText}`
      )
      .pipe(map(data => this.transformToItvshow(data)));
  }
  getShowSchedule(): Observable<ITvShowApp[]> {
    return this.httpClient
      .get<ITvShowData[]>(`${environment.baseUrl}api.tvmaze.com/schedule`)
      .pipe(map(data => this.transformToItvshow(data)));
  }
  private transformToItvshow(data: ITvShowData[]): ITvShowApp[] {
    var i;
    var array: ITvShowApp[] = [];
    for (i = 0; i < data.length; i++) {
      // console.log(JSON.stringify(data[i]));
      array[i] = {
        id: data[i].show.id,
        name: data[i].show.name,
        // language: data.language,
        rating: data[i].show.rating.average,
        genres: data[i].show.genres,
        summary: this.replace(data[i].show.summary),
        image: data[i].show.image
          ? data[i].show.image.medium
          : "./images/no-image-icon.png",
        url: data[i].show.url,
        premiered: data[i].show.premiered,
        runtime: this.timeConvert(data[i].show.runtime)

        // country: data.network.country.name
      };
    }
    return array;
  }
  private replace(html: string) {
    var div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  }
  private timeConvert(n: number) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    // return rhours ? rhours + " h " + rminutes + " min" : rminutes + " min";
    if (rhours && rminutes) {
      return rhours + " h " + rminutes + " min";
    } else if (!rhours && rminutes) {
      return rminutes + " min";
    } else {
      return rhours + " h ";
    }
  }
}
