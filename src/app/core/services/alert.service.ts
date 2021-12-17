import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private config: MatSnackBarConfig = {
    verticalPosition: 'top',
    horizontalPosition: 'right',
    duration: 2000,
  };

  constructor(private snackBar: MatSnackBar) {}

  /**
   * open default snackbar
   * @param  {string} message
   * @returns void
   */
  default(message: string): void {
    this.snackBar.open(message, 'Accept', this.config);
  }
}
