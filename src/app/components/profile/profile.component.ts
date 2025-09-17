import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { EducationService, Education } from '../../services/education.service';
import { ExperienceService, Experience } from '../../services/experience.service';
import { ContentCardComponent } from './content-card/content-card.component';

type ExperienceVM = Experience & { bullets: string[] };
type EducationVM = Education & { bullets: string[] };

export interface CardGenericContent {
  headerTitle_1: string;
  headerTitle_2: string;
  headerUrl: string;
  date_1: string;
  date_2: string;
  imgUrl: string;
  bullets: string[];
}

@Component({
  selector: 'app-profile',
  imports: [NgFor, NgIf, ContentCardComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  education: EducationVM[] = [];
  experience: ExperienceVM[] = [];

  constructor(private educationService: EducationService, private experienceService: ExperienceService) {}

  private splitBullets(s?: string | null): string[] {
    return (s ?? '')
      .split('#')
      .map(t => t.trim())
      .filter(t => t.length > 0);
  }
  
  public educationIntoGeneric(education: EducationVM): CardGenericContent {
    let content: CardGenericContent = {
      headerTitle_1: education.courseTitle,
      headerTitle_2: education.institution.name,
      headerUrl: education.institution.url,
      date_1: education.startDate,
      date_2: education.endDate,
      imgUrl: education.country.countryFlag,
      bullets: education.bullets
    }

    return content;
  }


  public experienceIntoGeneric(experience: ExperienceVM): CardGenericContent {
    let content: CardGenericContent = {
      headerTitle_1: experience.jobTitle,
      headerTitle_2: experience.company.name,
      headerUrl: experience.company.url,
      date_1: experience.startDate,
      date_2: experience.endDate,
      imgUrl: experience.country.countryFlag,
      bullets: experience.bullets
    }

    return content;
  }
  ngOnInit(): void {
    this.experienceService.getAll().subscribe(data => {
      this.experience = data.map(e => ({
        ...e,

        bullets: this.splitBullets(e.description as any)
      }));
      
    });

    this.educationService.getAll().subscribe(data => {
      this.education = data.map(e => ({
        ...e,
        bullets: this.splitBullets(e.description as any)
      }));
    });

    
  }
}
