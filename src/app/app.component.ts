import { Component } from "@angular/core";
import { ITvShowApp } from "./itv-show-app";
import { TvShowService } from "./tv-show.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Tv-Show-App";
  ApiData: ITvShowApp[];
  tvShowPre: ITvShowApp[];
  previous: Array<string> = [""];

  constructor(private tvShowService: TvShowService) {}

  doSearch(searchValue) {
    const userInput = searchValue.trim();
    this.previous.push(searchValue);
    this.tvShowService
      .getTvShow(userInput)
      .subscribe(data => (this.ApiData = data));

    if (this.previous.length > 2) {
      this.tvShowService
        .getTvShow(this.previous[this.previous.length - 2])
        .subscribe(data => (this.tvShowPre = data));
    }
  }
}
