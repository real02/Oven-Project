import { Component } from '@angular/core';

import { Location } from 'src/app/data/Location/location';

@Component({
  selector: 'ngz-map',
  template: './index.html',
  styleUrls: ['./index.scss'],
})
export class MapComponent {
  location: Location;
}
