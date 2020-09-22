import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class MatPaginatorIntlAz extends MatPaginatorIntl {
  itemsPerPageLabel = 'Элементов на странице';
  nextPageLabel = 'Следующая страница';
  previousPageLabel = 'Предыдущая страница';
  firstPageLabel = 'Первая страница';
  lastPageLabel = 'Последняя страница';
}
