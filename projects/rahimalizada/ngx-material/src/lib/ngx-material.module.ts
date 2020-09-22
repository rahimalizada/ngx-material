import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [MatPaginatorModule, MatTableModule, MatSortModule, MatSnackBarModule],
  exports: [MatPaginatorModule, MatTableModule, MatSortModule, MatSnackBarModule],
  providers: [
    // { provide: MatPaginatorIntl, useClass: MatPaginatorIntlAz },
  ],
})
export class NgxMaterialModule {}
