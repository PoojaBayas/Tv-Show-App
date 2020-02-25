import { Component } from '@angular/core';
import { ITvShow } from './itv-show';
import { TvShowService } from './tv-show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tv-Show-App';
  tvshow: ITvShow[];
   
  constructor(private tvshowService: TvShowService){}

  doSearch(searchValue){
    const userInput = searchValue.trim();
        this.tvshowService.getShowDetail(userInput).subscribe(data => this.tvshow = data)
  }
}
