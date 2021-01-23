import { PagerResult } from '@rahimalizada/ngx-common';
import { Observable } from 'rxjs';

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
