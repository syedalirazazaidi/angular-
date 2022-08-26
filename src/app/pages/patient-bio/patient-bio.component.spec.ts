import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBioComponent } from './patient-bio.component';

describe('PatientBioComponent', () => {
  let component: PatientBioComponent;
  let fixture: ComponentFixture<PatientBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientBioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
