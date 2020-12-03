import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphComponent } from './components/Graph';
import { MapComponent } from './components/Map';
import { MeasurementsComponent } from './components/Measurement';
import { OvenInfoComponent } from './components/OvenInfo';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    MapComponent,
    MeasurementsComponent,
    OvenInfoComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
