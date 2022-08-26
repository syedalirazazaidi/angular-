import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-bio',
  templateUrl: './patient-bio.component.html',
  styleUrls: ['./patient-bio.component.css'],
})
export class PatientBioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  Patients: any[] = [
    'card1',
    'card2',
    'card3',
    'card4',
    'card5',
    'card6',
    'card7',
    'card8',
    'card10',
    'card11',
    'card12',
  ];
}
