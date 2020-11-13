import { Component } from '@angular/core';
import { Measurement } from 'src/app/data/Measurement/measurement';

@Component({
  selector: 'ngz-measurements',
  template: './index.html',
  styleUrls: ['./index.scss'],
})
export class MeasurementsComponent {
  measurements: Array<Measurement> = [];
}
