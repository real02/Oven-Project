import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Oven } from 'src/app/data/Oven/oven';
import { IOven } from 'src/app/data/Oven/IOven';

@Injectable({
  providedIn: 'root',
})
export class OvenService {
  private ovensUrl = 'app/data/api/ovens.json';

  constructor(private http: HttpClient) {}

  public getOvens(): Observable<IOven[]> {
    return this.http.get<IOven[]>(this.ovensUrl).pipe(
      tap((data) => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
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
