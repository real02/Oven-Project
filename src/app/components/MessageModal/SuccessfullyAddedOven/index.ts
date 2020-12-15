import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'ngz-message-addedOven',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
})
export class AddedOvenMessageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  @Input()
  ovenAdded: boolean;

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog() {
    this.dialog.open(SuccessfulAddedOvenDialog, {
      height: '200px',
      width: '400px',
    });

    this.ovenAdded = !this.ovenAdded;
  }
}

@Component({
  selector: 'ngz-successful-added',
  templateUrl: './messageTemplateAdding.html',
})
export class SuccessfulAddedOvenDialog {}
