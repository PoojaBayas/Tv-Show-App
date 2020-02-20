import { Injectable } from "@angular/core";
import { ITvShowService } from "./itv-show-service";
import { ITvShowApp } from "./itv-show-app";
import { of, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TvShowFakeService implements ITvShowService {
  private fakeTvShow: ITvShowApp[] = [
    {
      id: 1,
      name: "Girls",
      url: "",
      genres: "drama",
      rating: 2,
      image: "",
      summary: "This is the summary"
    },
    {
      id: 2,
      name: "Girls glamore",
      url: "",
      genres: "drama",
      rating: 2,
      image: "",
      summary: "This is the summary"
    }
  ];
  constructor() {}
  public getTvShow(name: string): Observable<ITvShowApp[]> {
    return of(this.fakeTvShow);
  }
}
