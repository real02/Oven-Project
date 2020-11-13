import { Component } from '@angular/core';
import { Oven } from './data/Oven/oven';

@Component({
  selector: 'ngz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ovens: Array<Oven> = [];

  selectedOven: Oven;
}
