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

  constructor(private tvShowService: TvShowService) {}

  doSearch(searchValue) {
    const userInput = searchValue.trim();
    this.tvShowService
      .getTvShow(userInput)
      .subscribe(data => (this.ApiData = data));
  }
}
