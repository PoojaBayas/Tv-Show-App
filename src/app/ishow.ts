import { Observable } from 'rxjs';
import { ITvShow } from './itv-show';

export interface Ishow {
  getShowDetail(searchText: string |number) :
Observable <ITvShow[]>
}
