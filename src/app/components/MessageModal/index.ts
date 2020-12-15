import { Component } from '@angular/core';

@Component({
  selector: 'ngz-message-modal',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
})
export class MessageModalComponent {
  onOpen(event: any) {
    console.log(event);
  }
}
