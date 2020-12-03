import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Oven } from 'src/app/data/Oven/oven';

@Component({
  selector: 'ngz-oven-info',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
})
export class OvenInfoComponent {
  @Input()
  selectedOven: Oven;
  @Output()
  selectedOvenChange = new EventEmitter<Oven>();

  @Input()
  ovens: Array<Oven>;

  handleChange(): void {
    this.selectedOvenChange.emit(this.selectedOven);
  }

  setSelectedOven(ovenID: number): void {
    this.selectedOven = this.ovens[ovenID];
    this.handleChange();
    console.log(this.selectedOven);
  }
}
