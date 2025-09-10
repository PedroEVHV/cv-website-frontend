import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ExperienceService, Experience } from './services/experience.service';
import { EducationService, Education } from './services/education.service';
import { CountryService, Country } from './services/country.service';
import { CompanyService, Company } from './services/company.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  experiences: Experience[] = [];
  educations: Education[] = [];
  countries: Country[] = [];
  companies: Company[] = [];

  constructor(
    private experienceService: ExperienceService,
    private educationService: EducationService,
    private countryService: CountryService,
    private companyService: CompanyService
  ) {}

  ngOnInit() {
    this.experienceService.getAll().subscribe(data => this.experiences = data);
    this.educationService.getAll().subscribe(data => this.educations = data);
    // this.countryService.getAll().subscribe(data => this.countries = data);
    // this.companyService.getAll().subscribe(data => this.companies = data);
  }
}
