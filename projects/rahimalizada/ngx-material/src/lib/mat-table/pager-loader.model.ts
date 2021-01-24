import { Observable } from 'rxjs';
import { PagerResult } from './pager-result.model';

export interface PagerLoader<T> {
  pagerByPath(
    path: string,
    page: number,
    pageSize: number,
    sort: string,
    sortDirection: string,
    searchTerms: string,
    requestFilters?: any,
  ): Observable<PagerResult<T>>;

  pager(
    page: number,
    pageSize: number,
    sort: string,
    sortDirection: string,
    searchTerms: string,
    requestFilters?: any,
  ): Observable<PagerResult<T>>;
}
