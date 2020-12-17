import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Oven } from '../../data/Oven/oven';

import { OvenService } from '../../services/api/ovens.service';

@Component({
  selector: 'ngz-home-page',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
})
export class HomePageComponent implements OnInit {
  ovens: Array<Oven> = [];

  selectedOven: Oven;

  public errorMessage: string;

  public constructor(
    private ovenService: OvenService,
    private router: Router
  ) {}

  public loadData(): void {
    this.ovenService.getOvens().subscribe({
      next: (ovens) => {
        this.ovens = ovens;
        this.selectedOven = this.ovens.length > 0 ? this.ovens[0] : new Oven();
        console.log(this.ovens);
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  public navigateToPageNotFound(): void {
    this.router.navigate(['**']);
  }

  ngOnInit(): void {
    const url = this.router.url;

    if (url.match('/main/d?')) {
      this.loadData();

      let tmp = url.split('main/');
      const ovenId = tmp[1];

      //ako ne postoji oven sa upisanima id-em, ispiši poruku
      if (this.ovens.find((o) => o.ovenId == ovenId) === undefined) {
        this.navigateToPageNotFound();
        return;
      }

      this.ovenService.getOven(parseInt(ovenId)).subscribe({
        next: (oven) => {
          this.selectedOven = oven;
        },
        error: (err) => (this.errorMessage = err),
      });
    } else if (url.match('/main')) {
      this.loadData();
    }
  }
}
