import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MaestroItem } from '../modulos/maestroItem';

@Injectable({
  providedIn: 'root'
})

export class MaestroService {
  private apiURL = "http://localhost:8000/api/person/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<MaestroItem[]> {
   return this.httpClient.get<MaestroItem[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 } 

 create(maestro: any): Observable<MaestroItem> {
   return this.httpClient.post<MaestroItem>(this.apiURL, JSON.stringify(maestro), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id: number): Observable<MaestroItem> {
   return this.httpClient.get<MaestroItem>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id: number, maestro: any): Observable<MaestroItem> {
   return this.httpClient.put<MaestroItem>(this.apiURL + id, JSON.stringify(maestro), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id: number){
   return this.httpClient.delete<MaestroItem>(this.apiURL + id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }
}
