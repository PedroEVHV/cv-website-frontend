import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Company, CompanyService } from '../../services/company.service'; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [CommonModule]
})
export class MainComponent implements OnInit, OnDestroy {
  companies: { name: string, webUrl: string }[] = [];
  currentIndex: number = 0;
  private intervalId: any;

  constructor(private companyService: CompanyService) {}

  ngOnInit() {

  }

  ngOnDestroy() {
    // Clear interval on component destroy to prevent memory leaks
    clearInterval(this.intervalId);
  }
}