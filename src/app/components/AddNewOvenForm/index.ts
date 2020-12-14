import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Oven } from 'src/app/data/Oven/oven';
import { OvenDto } from 'src/app/data/OvenDto/ovenDto';
import { OvenService } from 'src/app/services/api/ovens.service';

@Component({
  selector: 'ngz-oven-form',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
})
export class AddNewOvenComponent implements OnInit {
  public constructor(private ovenService: OvenService) {}

  validatingForm: FormGroup;

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      address: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z].*'),
      ]),
      locationLatitude: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '([0-9].[0-9]{0,9}|-[0-9].[0-9]{0,9}|[0-8][0-9].[0-9]{0,8}|-[0-8][0-9].[0-9]{0,7}|-90|90)'
        ),
      ]),
      locationLongitude: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(0.[0-9]{0,7}|[0-9]{1,2}.[0-8]{0,7}|1[0-7][0-9].[0-9]{0,7}|180)'
        ),
      ]),
    });
  }

  public addNewOven(): void {
    if (this.validatingForm.valid) {
      const ovenDto = new OvenDto(
        this.validatingForm.value.address,
        this.validatingForm.value.locationLatitude,
        this.validatingForm.value.locationLongitude
      );

      this.ovenService.addNewOven(ovenDto).subscribe();
    }
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
