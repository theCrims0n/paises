import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL : string = 'https://restcountries.com/v3.1'; 
  private apiURLR : string = 'https://restcountries.com/v2/regionalbloc/'; 

  constructor(private http : HttpClient) {}

  buscarPais(termino : string) : Observable<Country[]>
  {
    const url = `${this.apiURL}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino : string) : Observable<Country[]>
  {
    const url = `${this.apiURL}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisAlpha(id : string) : Observable<Country>
  {
    const url = `${this.apiURL}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  getRegion(id : string) : Observable<Country[]>
  {
    const url = `${this.apiURLR}${id}`;
    const params = new HttpParams().set('fields', 'name,region,population,flags,alpha3Code');
    
    return this.http.get<Country[]>(url, {params}).pipe( tap(console.log) )
  }
}
