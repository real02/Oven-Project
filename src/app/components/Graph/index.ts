import { Component, Input } from '@angular/core';
import { Measurement } from 'src/app/data/Measurement/measurement';

@Component({
  selector: 'ngz-graph',
  template: './index.html',
  styleUrls: ['./index.scss'],
})
export class GraphComponent {
  measurements: Array<Measurement> = [];
}
