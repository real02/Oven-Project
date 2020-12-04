import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Oven } from 'src/app/data/Oven/oven';

@Component({
  selector: 'ngz-oven-info',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
})
export class OvenInfoComponent {
  @Input()
  public selectedOven: Oven;
  @Output()
  private selectedOvenChange = new EventEmitter<Oven>();

  @Input()
  public ovens: Array<Oven>;

  private handleChange(): void {
    this.selectedOvenChange.emit(this.selectedOven);
  }

  public setSelectedOven(ovenID: number): void {
    this.selectedOven = this.ovens[ovenID];
    this.handleChange();
    console.log(this.selectedOven);
  }
}
