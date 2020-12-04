import { Component, Input } from '@angular/core';

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

  public convertCelsiusToFahrenheit(tempCelsius: number): string {
    const result = tempCelsius * (9 / 5) + 32;
    return result.toFixed(1);
  }
}
