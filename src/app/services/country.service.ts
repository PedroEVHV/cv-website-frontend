import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Country {
  countryName: string;
  countryFlag: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'http://localhost:8080/api/country'; // adjust path if needed

  constructor(private http: HttpClient) {}

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }
}
