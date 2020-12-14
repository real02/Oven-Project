import { HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Oven } from 'src/app/data/Oven/oven';
import { OvenService } from 'src/app/services/api/ovens.service';

@Component({
  selector: 'ngz-editable',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
})
export class EditableInfoComponent {
  public constructor(private ovenService: OvenService) {}

  @Input()
  public selectedOven: Oven;

  public propertyValues: { [key: string]: string } = {};
  public showInput = false;

  public addValue(value: string, property: string): void {
    this.propertyValues[property] = value;
  }

  public toggleShowInput(): void {
    this.showInput = !this.showInput;
  }

  public cancelChanges(): void {
    this.propertyValues = {};
    this.showInput = false;
  }

  public updateOvenData(): void {
    if (this.hasEmptyProperty()) {
      return;
    }

    // tslint:disable-next-line: forin
    for (const property in this.propertyValues) {
      this.selectedOven[property] = this.propertyValues[property];
    }

    this.ovenService.updateOven(this.selectedOven).subscribe();
  }

  public hasEmptyProperty(): boolean {
    const values = Object.values(this.propertyValues);
    return values.includes(' ');
  }
}
