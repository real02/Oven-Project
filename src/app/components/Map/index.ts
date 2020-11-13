import { Component, Input } from '@angular/core';

import { Location } from 'src/app/data/Location/location';
import { Oven } from 'src/app/data/Oven/oven';

@Component({
  selector: 'ngz-map',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
})
export class MapComponent {
  location: Location;

  @Input()
  selectedOven: Oven;
}
