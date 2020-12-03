import { Component, OnInit } from '@angular/core';

import { Oven } from './data/Oven/oven';

import { OvenService } from './services/api/ovens.service';
import { Location } from './data/Location/location';

@Component({
  selector: 'ngz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ovens: Array<Oven> = [];

  selectedOven =
    this.ovens.length > 0
      ? this.ovens[0]
      : new Oven('', '', [], new Location());

  public errorMessage: string;

  public constructor(private ovenService: OvenService) {}

  ngOnInit(): void {
    this.ovenService.getOvens().subscribe({
      next: (ovens) => {
        this.ovens = ovens;
        console.log(this.ovens);
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
