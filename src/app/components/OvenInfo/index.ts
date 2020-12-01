import { Component, Input } from '@angular/core';

import { Oven } from 'src/app/data/Oven/oven';

@Component({
  selector: 'ngz-oven-info',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
})
export class OvenInfoComponent {
  @Input()
  selectedOven: Oven;

  @Input()
  ovens: Array<Oven>;

  setSelectedOven(oven: Oven): void {
    this.selectedOven = oven;
  }
}
