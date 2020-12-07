import {
  Component,
  Input,
  ViewChild,
  AfterViewInit,
  ElementRef,
  OnChanges,
} from '@angular/core';

import { Oven } from 'src/app/data/Oven/oven';

import {} from 'googlemaps';

@Component({
  selector: 'ngz-map',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
})
export class MapComponent implements AfterViewInit, OnChanges {
  @Input()
  private selectedOven: Oven;

  @ViewChild('map', { static: false })
  private mapElement: ElementRef;

  private map: google.maps.Map;

  private coordinates = new google.maps.LatLng(
    45.802385867604286,
    15.976800678562704
  );

  private mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 13,
  };

  private marker: google.maps.Marker;

  ngAfterViewInit(): void {
    this.marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map,
    });
    this.mapInitializer();
  }

  private mapInitializer(): void {
    if (this.mapElement !== undefined) {
      this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        this.mapOptions
      );
      this.marker.setMap(this.map);
    }
  }

  ngOnChanges(): void {
    // tslint:disable-next-line: forin
    if (this.selectedOven !== undefined) {
      this.coordinates = new google.maps.LatLng(
        this.selectedOven.location.latitude,
        this.selectedOven.location.longitude
      );
      this.marker = new google.maps.Marker({
        position: this.coordinates,
        map: this.map,
      });
      this.mapInitializer();
    }
  }
}
