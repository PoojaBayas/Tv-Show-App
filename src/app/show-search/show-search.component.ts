import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { TvShowService } from "../tv-show.service";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-show-search",
  templateUrl: "./show-search.component.html",
  styleUrls: ["./show-search.component.css"]
})
export class ShowSearchComponent implements OnInit {
  search = new FormControl("", Validators.minLength(3));
  constructor(private tvShowService: TvShowService) {}

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((searchValue: string) => {
        if (!this.search.invalid && searchValue) {
          const userInput = searchValue.trim();
          this.tvShowService
            .getTvShow(userInput)
            .subscribe(data => console.log(data));
        }
      });
  }
}
