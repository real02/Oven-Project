import {
  Component,
  Input,
  ViewChild,
  AfterViewInit,
  ElementRef,
  OnChanges,
  OnInit,
} from '@angular/core';

import { Oven } from 'src/app/data/Oven/oven';

import {} from 'googlemaps';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'ngz-map',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
})
export class MapComponent implements AfterViewInit, OnChanges {
  @Input()
  selectedOven: Oven;

  @ViewChild('map', { static: false })
  mapElement: ElementRef;

  map: google.maps.Map;

  coordinates = new google.maps.LatLng(45.802385867604286, 15.976800678562704);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 13,
  };

  marker: google.maps.Marker;

  ngAfterViewInit(): void {
    this.marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map,
    });
    this.mapInitializer();
  }

  mapInitializer(): void {
    if (this.mapElement !== undefined) {
      this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        this.mapOptions
      );
      this.marker.setMap(this.map);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line: forin
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);

      this.coordinates = new google.maps.LatLng(
        this.selectedOven.location.latitude,
        this.selectedOven.location.longitude
      );
      // console.log(
      //   this.selectedOven.location.latitude +
      //     ' ' +
      //     this.selectedOven.location.longitude
      // );
      this.marker = new google.maps.Marker({
        position: this.coordinates,
        map: this.map,
      });
      this.mapInitializer();
      // console.log(
      //   this.selectedOven.location.latitude +
      //     ' ' +
      //     this.selectedOven.location.longitude
      // );
      // console.log(
      //   `${propName}: currentValue = ${cur}, previousValue = ${prev}`
      // );
    }
  }
}
