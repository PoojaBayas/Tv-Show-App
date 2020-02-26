import { Component, OnInit, Input } from "@angular/core";
import { ITvShowApp } from '../itv-show-app';
import { TvShowService } from '../tv-show.service';

@Component({
  selector: "app-show-schedule",
  templateUrl: "./show-schedule.component.html",
  styleUrls: ["../tv-show/tv-show.component.css"]
})
export class ShowScheduleComponent implements OnInit {
  @Input() current: ITvShowApp[];
  ShowName = "";
  displayThisShow(Showname) {
    this.ShowName = Showname;
    document.getElementById("searchResultId").style.display = "none";
    document.getElementById("Test").style.display = "block";
  }
  constructor(private tvShowService: TvShowService) {}

  ngOnInit(): void {

    this. tvShowService.getShowSchedule()
    .subscribe(data => this.current = data)
  }
}
