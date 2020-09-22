import { Observable } from 'rxjs';
import { Pager } from './pager.model';

export interface PagerLoader<T> {
  pagerByPath(
    path: string,
    page: number,
    pageSize: number,
    sort: string,
    sortDirection: string,
    searchTerms: string,
    requestFilters?: any,
  ): Observable<Pager<T>>;

  pager(
    page: number,
    pageSize: number,
    sort: string,
    sortDirection: string,
    searchTerms: string,
    requestFilters?: any,
  ): Observable<Pager<T>>;
}
