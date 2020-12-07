import { Component, Input, OnChanges } from '@angular/core';

import { Oven } from 'src/app/data/Oven/oven';

import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'ngz-graph',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
})
export class GraphComponent implements OnChanges {
  @Input()
  private selectedOven: Oven;

  public ngOnChanges(): void {
    if (this.selectedOven !== undefined) {
      const myChart = new Chart('chart', {
        type: 'line',
        data: {
          labels: [
            '',
            '03:00',
            '06:00',
            '09:00',
            '12:00',
            '15:00',
            '18:00',
            '21:00',
            '00:00',
          ],
          datasets: [
            {
              label: 'Temperature (°C)',
              yAxisID: 'temperature',
              data: this.selectedOven.measurements.map((m) => m.temperature),
              borderColor: ['red'],
              borderWidth: 2,
            },
            {
              label: 'Power consumption (kWh)',
              yAxisID: 'power_consumption',
              data: this.selectedOven.measurements.map(
                (m) => m.powerConsumption
              ),
              borderColor: ['blue'],
              borderWidth: 2,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                id: 'temperature',
                ticks: {
                  beginAtZero: true,
                },
                position: 'left',
              },
              {
                id: 'power_consumption',
                ticks: {
                  beginAtZero: true,
                },
                position: 'left',
              },
            ],
          },
        },
      });
    }
  }
}
