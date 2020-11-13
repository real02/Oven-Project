import { Component, OnInit } from '@angular/core';

import { Oven } from './data/Oven/oven';

@Component({
  selector: 'ngz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ovens: Array<Oven> = [];

  selectedOven: Oven;

  ngOnInit(): void {
    this.getOvenData();
  }

  async getOvenData(): Promise<void> {}
}
