import { Component, OnInit } from '@angular/core';

import { Oven } from './data/Oven/oven';

import { OvenService } from './services/api/ovens.service';

import { HttpClient } from '@angular/common/http';
import { IOven } from './data/Oven/IOven';

@Component({
  selector: 'ngz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ovens: Array<Oven> = [];
  selectedOven: Oven;

  public errorMessage: string;

  public constructor(
    private ovenService: OvenService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.ovenService.getOvens().subscribe({
      next: (ovens) => {
        this.ovens = ovens;
      },
      error: (err) => (this.errorMessage = err),
    });

    // this.http
    //   .get('app/data/api/ovens.json')
    //   .subscribe((res) => console.log(res));
  }
}
