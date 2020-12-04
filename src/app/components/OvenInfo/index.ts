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

  public ovenSelected = false;

  public setSelectedOven(ovenID: number): void {
    this.selectedOven = this.ovens[ovenID];
    this.ovenSelected = true;
    this.selectedOvenChange.emit(this.selectedOven);
    console.log(this.selectedOven);
  }
}
