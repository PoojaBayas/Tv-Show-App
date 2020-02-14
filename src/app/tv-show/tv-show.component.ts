import { Component, OnInit } from '@angular/core';
import { ITvShowApp } from '../itv-show-app';
import {TvShowService} from '../tv-show.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {
 current :ITvShowApp
  constructor(private tvShowService :TvShowService) {
    
    } 
   

  ngOnInit(): void{
   this.tvShowService.getTvShow('Girls').subscribe(data =>this.current=data)
  }

}
