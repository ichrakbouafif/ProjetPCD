import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  readonly API_URL = "http://localhost:9090"
  readonly ENDPOINT_RECETTES = "/recettes/"
  constructor(private httpClient: HttpClient) {

   }
   getRecettes() {
    return this.httpClient.get(this.API_URL+this.ENDPOINT_RECETTES)
   }

   getRecetteById(id: number){
    return this.httpClient.get<any>(this.API_URL + this.ENDPOINT_RECETTES + id);
  }
  getRecettesByType(type: string): Observable<any[]> {
    return this.httpClient.get<any[]>(this.API_URL + this.ENDPOINT_RECETTES + 'type/' + encodeURIComponent(type));
  }
  searchRecettesByName(name: string): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}${this.ENDPOINT_RECETTES}search/${encodeURIComponent(name)}`);
  }
}
