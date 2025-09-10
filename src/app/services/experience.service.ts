import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Experience {
  id: number;
  jobTitle: string;
  company: {name: string, url: string};
  startDate: string;
  endDate: string;
  description: string;
  country: { countryName: string; countryFlag: string };
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private apiUrl = 'http://localhost:8080/api/experience';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiUrl);
  }
}

