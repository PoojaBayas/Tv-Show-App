import { Component, OnInit, Input } from "@angular/core";
import { ITvShowApp } from "../itv-show-app";
import { TvShowService } from "../tv-show.service";

@Component({
  selector: "app-tv-show",
  templateUrl: "./tv-show.component.html",
  styleUrls: ["./tv-show.component.css"]
})
export class TvShowComponent implements OnInit {
  @Input() current: ITvShowApp[];

  ShowName = "";
  displayThisShow(Showname) {
    this.ShowName = Showname;
    document.getElementById("searchResultId").style.display = "none";
    document.getElementById("Test").style.display = "block";
  }

  hideThisShow() {
    document.getElementById("Test").style.display = "block";
  }
  constructor(private tvShowService: TvShowService) {}

  ngOnInit(): void {
    //  this.tvShowService.getTvShow('girls').subscribe(data =>this.current=data)
    
  }
}
