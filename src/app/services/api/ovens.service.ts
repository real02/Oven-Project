import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Oven } from 'src/app/data/Oven/oven';
import { OvenDto } from 'src/app/data/OvenDto/ovenDto';

@Injectable({
  providedIn: 'root',
})
export class OvenService {
  private url = 'http://localhost:51044/api/ovens/';

  constructor(private http: HttpClient) {}

  public getOvens(): Observable<Oven[]> {
    return this.http
      .get<Oven[]>(this.url)
      .pipe(tap(), catchError(this.handleError));
  }

  public updateOven(ovenDto: OvenDto, ovenId: string): Observable<OvenDto> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http
      .put<OvenDto>(this.url + ovenId, ovenDto, { headers })
      .pipe(tap(), catchError(this.handleError));
  }

  public addNewOven(oven: OvenDto): Observable<Oven> {
    return this.http
      .post<Oven>(this.url, oven)
      .pipe(tap(), catchError(this.handleError));
  }

  public getOven(ovenId: number): Observable<Oven> {
    return this.http
      .get<Oven>(this.url + ovenId)
      .pipe(tap(), catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
