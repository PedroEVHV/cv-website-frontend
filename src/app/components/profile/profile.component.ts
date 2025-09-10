import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { EducationService, Education } from '../../services/education.service';
import { ExperienceService, Experience } from '../../services/experience.service';

type ExperienceVM = Experience & { bullets: string[] };
type EducationVM = Education & { bullets: string[] };

@Component({
  selector: 'app-profile',
  imports: [NgFor, NgIf],
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

  ngOnInit(): void {
    this.experienceService.getAll().subscribe(data => {
      this.experience = data.map(e => ({
        ...e,
        // if your field isn’t named "description", swap in the correct one here
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
