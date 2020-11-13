import { Component, OnInit } from '@angular/core';

import { Oven } from './data/Oven/oven';

import { OvenService } from './services/api/ovens.service';

@Component({
  selector: 'ngz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ovens: Array<Oven> = [];
  selectedOven: Oven;

  public errorMessage: string;

  public constructor(private ovenService: OvenService) {}

  ngOnInit(): void {
    this.ovenService.getOvens().subscribe({
      next: (ovens) => {
        this.ovens = ovens;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
