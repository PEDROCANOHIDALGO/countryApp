import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) { }

  getByPais(pais: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}name/${pais}`);
  }
  
  getByCapital(capital: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}capital/${capital}`);
  }


  getByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}region/${region}`);
  }
  searchCountryByAlphaCode(code: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
    .pipe(
      catchError(error => {
        // console.error('Error al buscar país:', error);
        alert('Error al buscar país. Por favor, inténtalo de nuevo.'); // Muestra el alert
        return of([]); // Vacía el array de resultados
      })
    );
  }
}