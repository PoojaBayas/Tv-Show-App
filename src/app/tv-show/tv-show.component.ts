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
  date = "";
  displayThisShow(Showname,premiered) {
    this.ShowName = Showname;
    this.date = premiered;
    document.getElementById("searchResultId").style.display = "none";
    document.getElementById("Test").style.display = "block";
  }

  
  constructor(private tvShowService: TvShowService) {}

  ngOnInit(): void {
    //  this.tvShowService.getTvShow('girls').subscribe(data =>this.current=data)
    
  }
}
