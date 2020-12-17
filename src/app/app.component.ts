import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Oven } from './data/Oven/oven';

import { OvenService } from './services/api/ovens.service';

@Component({
  selector: 'ngz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ovens: Array<Oven> = [];

  selectedOven: Oven;

  public errorMessage: string;

  public constructor(private ovenService: OvenService) {}

  // ngOnInit(): void {
  //   // TODO: ako je ruta /main onda ovo ispod:
  //   this.ovenService.getOvens().subscribe({
  //     next: (ovens) => {
  //       this.ovens = ovens;
  //       this.selectedOven = this.ovens.length > 0 ? this.ovens[0] : new Oven();
  //       console.log(this.ovens);
  //     },
  //     error: (err) => (this.errorMessage = err),
  //   });
  //   // TODO: ako je ruta /main:ovenId onda stavi za selectedOven, oven s id-em iz rute
  //   // TODO: dohvati oven naredbom getOven(ovenId: number) iz oven service-a, ako postoji onda selektiraj taj, a ako ne postoji onda redirectaj na /main
  // }
}
