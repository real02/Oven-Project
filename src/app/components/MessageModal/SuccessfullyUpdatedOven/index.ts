import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'ngz-message-updatedOven',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
})
export class UpdatedOvenMessageComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(SuccessfullyUpdatedOvenDialog);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'ngz-successful-updated',
  templateUrl: './messageTemplateUpdating.html',
})
export class SuccessfullyUpdatedOvenDialog {}
