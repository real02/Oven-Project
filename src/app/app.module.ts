import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphComponent } from './components/Graph';
import { MapComponent } from './components/Map';
import { MeasurementsComponent } from './components/Measurement';
import { OvenInfoComponent } from './components/OvenInfo';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditableInfoComponent } from './components/EditableInfo';
import { AddNewOvenComponent } from './components/AddNewOvenForm';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    MapComponent,
    MeasurementsComponent,
    OvenInfoComponent,
    EditableInfoComponent,
    AddNewOvenComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
