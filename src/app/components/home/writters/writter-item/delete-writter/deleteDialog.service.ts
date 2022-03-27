import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteWritterComponent } from './delete-writter.component';

@Injectable({
  providedIn: 'root',
})
export class DeleteDialogService {
  constructor(private deleteDialog: MatDialog) {}

  openDialog() {
    return this.deleteDialog.open(DeleteWritterComponent, {
      disableClose: true,
    });
  }
}
