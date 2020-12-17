import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { AboutUsComponent } from './AboutPage';
import { HomePageComponent } from './HomePage';
import { PageNotFoundComponent } from './PageNotFound';

export const appRoutes: Routes = [
  { path: 'main/about-us', component: AboutUsComponent },
  { path: 'main', component: HomePageComponent, pathMatch: 'full' },
  { path: 'main/:ovenId', component: HomePageComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
