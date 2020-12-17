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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  AddedOvenMessageComponent,
  SuccessfulAddedOvenDialog,
} from './components/MessageModal/SuccessfullyAddedOven';
import {
  SuccessfullyUpdatedOvenDialog,
  UpdatedOvenMessageComponent,
} from './components/MessageModal/SuccessfullyUpdatedOven';
import { MatDialogModule } from '@angular/material/dialog';

import { appRoutes } from './routes/routes';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './routes/HomePage';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    MapComponent,
    MeasurementsComponent,
    OvenInfoComponent,
    EditableInfoComponent,
    AddNewOvenComponent,
    AddedOvenMessageComponent,
    UpdatedOvenMessageComponent,
    SuccessfulAddedOvenDialog,
    SuccessfullyUpdatedOvenDialog,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
