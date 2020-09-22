import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class MatPaginatorIntlAze extends MatPaginatorIntl {
  itemsPerPageLabel = 'Sıra sayı';
  nextPageLabel = 'Növbəti səhifə';
  previousPageLabel = 'Əvvəlki səhifə';
  firstPageLabel = 'Birinci səhifə';
  lastPageLabel = 'Sonuncu səhifə';
}
