import { Component, Input } from '@angular/core';
import { Measurement } from 'src/app/data/Measurement/measurement';

import { Oven } from 'src/app/data/Oven/oven';

@Component({
  selector: 'ngz-measurements',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
})
export class MeasurementsComponent {
  @Input()
  public selectedOven: Oven;

  @Input()
  public ovenSelected: boolean;

  public insertFahrenheitValue(measurement: Measurement, id: number): string {
    const result = measurement.temperature * (9 / 5) + 32;
    const currentValue = this.selectedOven.measurements[id]
      .temperatureInFahrenheit;

    if (currentValue !== result) {
      this.selectedOven.measurements[id].temperatureInFahrenheit = result;
    }

    return result.toFixed(1);
  }
}
