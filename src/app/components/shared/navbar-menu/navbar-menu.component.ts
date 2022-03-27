import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss'],
})
export class NavbarMenuComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}

  openDialog(): void {
    let dialogRef = this.dialog.open(NavbarMenuDialog, {
      width: '100%',
      height: '100%',
      maxWidth: '100%',
      maxHeight: '100%',
      hasBackdrop: false,
    });
  }
}
@Component({
  selector: 'navbar-menu-dialog',
  templateUrl: 'navbar-menu.component-dialog.html',
  styleUrls: ['./navbar-menu.component.scss'],
})
export class NavbarMenuDialog {

  constructor(
    public dialogRef: MatDialogRef<NavbarMenuDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
