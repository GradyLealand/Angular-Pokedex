import { Component, OnInit, Input, HostListener } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-about-table',
  templateUrl: './about-table.component.html',
  styleUrls: ['../app.component.css']
})
export class AboutTableComponent implements OnInit {

  about: boolean;
  project: boolean;
  resources: boolean;
  learning: boolean;
  code: boolean;

  openAboutProject()
  {
    this.about = false;
    this.project = true;
    this.resources = false;
    this.learning = false;
    this.code = false;
  }

  openAboutResources()
  {
    this.about = false;
    this.project = false;
    this.resources = true;
    this.learning = false;
    this.code = false;
  }

  openAboutLearning()
  {
    this.about = false;
    this.project = false;
    this.resources = false;
    this.learning = true;
    this.code = false;
  }

  openAboutCode()
  {
    this.about = false;
    this.project = false;
    this.resources = false;
    this.learning = false;
    this.code = true;
  }

  back()
  {
    this.about = true;
    this.project = false;
    this.resources = false;
    this.learning = false;
    this.code = false;
  }

  constructor()
  { 
    this.about = true;
    this.project = false;
    this.resources = false;
    this.learning = false;
    this.code = false;
  }

  ngOnInit() {
  }

}
