import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngz-oven-form',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
})
export class AddNewOvenComponent implements OnInit {
  validatingForm: FormGroup;

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      address: new FormControl('', Validators.required),
      locationLatitude: new FormControl('', Validators.required),
      locationLongitude: new FormControl('', Validators.required),
    });
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
