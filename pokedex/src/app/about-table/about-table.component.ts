import { Component, OnInit, Input, HostListener } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-about-table',
  templateUrl: './about-table.component.html'
})
export class AboutTableComponent implements OnInit {

  about: boolean;
  project: boolean;
  resources: boolean;
  process: boolean;
  code: boolean;

  openAboutProject()
  {
    this.about = false;
    this.project = true;
    this.resources = false;
    this.process = false;
    this.code = false;
  }

  back()
  {
    this.about = true;
    this.project = false;
    this.resources = false;
    this.process = false;
    this.code = false;
  }

  

  constructor() { 
    this.about = true;
    this.project = false;
    this.resources = false;
    this.process = false;
    this.code = false;
  }

  ngOnInit() {
  }

}
