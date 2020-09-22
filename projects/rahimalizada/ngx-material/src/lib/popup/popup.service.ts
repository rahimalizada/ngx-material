import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private config: MatSnackBarConfig = { duration: 10000, verticalPosition: 'bottom', horizontalPosition: 'center' };

  constructor(private matSnackBar: MatSnackBar) {}

  show(message: any, panelClass: string): void {
    if (typeof message === 'string') {
      this.matSnackBar.open(message, 'X', { ...this.config, panelClass });
    } else if (message instanceof Error) {
      this.matSnackBar.open(message.message, 'X', { ...this.config, panelClass });
    } else if (message instanceof HttpErrorResponse) {
      // const title = `HTTP ${message.status} ${message.statusText}`;
      const title = message.statusText;
      const msg = typeof message.error === 'object' ? JSON.stringify(message.error) : message.error;
      const result = title === message.error ? msg : `${title}: ${msg}`;
      this.matSnackBar.open(result, 'X', { ...this.config, panelClass });
    } else {
      console.error(`Unknown notification message type: ${message.name}`);
    }
  }

  info(message: any): void {
    this.show(message, 'info');
  }

  error(message: any): void {
    this.show(message, 'error');
  }

  danger(message: any): void {
    this.show(message, 'danger');
  }
}
