import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLearningComponent } from './about-learning.component';

describe('AboutLearningComponent', () => {
  let component: AboutLearningComponent;
  let fixture: ComponentFixture<AboutLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
