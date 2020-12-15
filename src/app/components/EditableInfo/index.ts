import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Oven } from 'src/app/data/Oven/oven';
import { OvenService } from 'src/app/services/api/ovens.service';

@Component({
  selector: 'ngz-editable',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
})
export class EditableInfoComponent {
  public constructor(private ovenService: OvenService) {}

  validatingForm: FormGroup;

  @Input()
  public selectedOven: Oven;

  public propertyValues: { [key: string]: string } = {};
  public showInput = false;

  public initEmptyForm(): void {
    this.validatingForm = new FormGroup({
      address: new FormControl(this.selectedOven.address, [
        Validators.required,
        Validators.pattern('[a-zA-Z].*'),
      ]),
      locationLatitude: new FormControl(this.selectedOven.locationLatitude, [
        Validators.required,
        Validators.pattern(
          '([0-9][.][0-9]{1,14}|-[0-9][.]][0-9]{1,14}|[0-8][0-9][.][0-9]{1,14}|-[0-8][0-9][.][0-9]{1,14})'
        ),
      ]),
      locationLongitude: new FormControl(this.selectedOven.locationLongitude, [
        Validators.required,
        Validators.pattern(
          '(0[.][0-9]{1-14}|[0-9]{1,2}[.][0-9]{1,14}|1[0-7][0-9][.][0-9]{1,14})'
        ),
      ]),
    });
  }

  public addValue(value: string, property: string): void {
    this.propertyValues[property] = value;
  }

  public toggleShowInput(): void {
    this.showInput = !this.showInput;
    if (this.showInput) {
      this.initEmptyForm();
    }
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

  public validateAddress(): boolean {
    return (
      this.validatingForm.controls.address.valid ||
      this.validatingForm.controls.address.untouched
    );
  }

  public validateLocationLatitude(): boolean {
    return (
      this.validatingForm.controls.locationLatitude.valid ||
      this.validatingForm.controls.locationLatitude.untouched
    );
  }

  public validateLocationLongitude(): boolean {
    return (
      this.validatingForm.controls.locationLongitude.valid ||
      this.validatingForm.controls.locationLongitude.untouched
    );
  }

  // tslint:disable-next-line: typedef
  get address() {
    return this.validatingForm.get('address');
  }

  // tslint:disable-next-line: typedef
  get locationLatitude() {
    return this.validatingForm.get('locationLatitude');
  }

  // tslint:disable-next-line: typedef
  get locationLongitude() {
    return this.validatingForm.get('locationLongitude');
  }
}
