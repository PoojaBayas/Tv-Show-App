import { Observable } from 'rxjs';
import { ITvShowApp } from './itv-show-app';

export interface ITvShowService {
  getTvShow(name:string): 
  Observable<ITvShowApp[]>
}
