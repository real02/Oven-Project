import { Component, Input } from '@angular/core';

import { Measurement } from 'src/app/data/Measurement/measurement';
import { Oven } from 'src/app/data/Oven/oven';

@Component({
  selector: 'ngz-measurements',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
})
export class MeasurementsComponent {
  measurements: Array<Measurement> = [];

  @Input()
  selectedOven: Oven;
}
