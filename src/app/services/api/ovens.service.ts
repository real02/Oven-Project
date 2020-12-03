import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Oven } from 'src/app/data/Oven/oven';

@Injectable({
  providedIn: 'root',
})
export class OvenService {
  private ovensUrl = 'app/data/api/ovens.json';

  constructor(private http: HttpClient) {}

  public getOvens(): Observable<Oven[]> {
    return this.http
      .get<Oven[]>(this.ovensUrl)
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
