import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Education {
  id: number;
  courseTitle: string;
  institution: {name: string, url: string};
  startDate: string;
  endDate: string;
  description: string;
  country: { countryName: string; countryFlag: string };
}

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiUrl = 'http://localhost:8080/api/education';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Education[]> {
    return this.http.get<Education[]>(this.apiUrl);
  }
}