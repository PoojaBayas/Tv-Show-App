import { Component, OnInit, Input } from '@angular/core';
import { ITvShowApp } from '../itv-show-app';

@Component({
  selector: 'app-previous-search',
  templateUrl: './previous-search.component.html',
  styleUrls: ["../tv-show/tv-show.component.css"]
})
export class PreviousSearchComponent implements OnInit {
  @Input() current: ITvShowApp[];
  ShowName = "";
  date = "";
  displayThisShow(Showname,premiered) {
    this.ShowName = Showname;
    this.date = premiered;
    document.getElementById("searchResultId").style.display = "none";
    document.getElementById("Test").style.display = "block";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
