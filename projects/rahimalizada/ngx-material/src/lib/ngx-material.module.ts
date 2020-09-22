import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [MatPaginatorModule, MatTableModule, MatSortModule],
  exports: [MatPaginatorModule, MatTableModule, MatSortModule],
  providers: [
    // { provide: MatPaginatorIntl, useClass: MatPaginatorIntlAz },
  ],
})
export class NgxMaterialModule {}
