import { Observable } from 'rxjs';
import { ITvShowApp } from './itv-show-app';

export interface ITvShowService {
  getTvShow(searchText:string): 
  Observable<ITvShowApp[]>
}
