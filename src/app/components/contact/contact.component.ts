import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [NgFor],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor() {}

  ngOnInit() {

  }
}