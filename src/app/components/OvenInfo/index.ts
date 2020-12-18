import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

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

  public showInput: boolean;

  public setSelectedOven(ovenID: number): void {
    console.log(ovenID);
    this.selectedOven = this.ovens[ovenID - 1];
    this.ovenSelected = true;
    this.selectedOvenChange.emit(this.selectedOven);
    console.log(this.selectedOven);
  }

  public setEditMode(showInput: boolean) {
    this.showInput = showInput;
  }

  public setDropDownListValue(): void {
    let dropdownList = document.getElementById('ovens') as HTMLSelectElement;
    dropdownList.selectedIndex = parseInt(this.selectedOven.ovenId) - 1;
  }
}
