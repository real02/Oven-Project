import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'ngz-message-updatedOven',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
})
export class UpdatedOvenMessageComponent {
  constructor(public dialog: MatDialog) {}

  @Input()
  ovenUpdated: boolean;

  @Input()
  showInput: boolean;

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog() {
    this.dialog.open(SuccessfullyUpdatedOvenDialog, {
      height: '200px',
      width: '400px',
    });

    this.ovenUpdated = !this.ovenUpdated;
    this.showInput = false;
  }
}

@Component({
  selector: 'ngz-successful-updated',
  templateUrl: './messageTemplateUpdating.html',
})
export class SuccessfullyUpdatedOvenDialog {}
