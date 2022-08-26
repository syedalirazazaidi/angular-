import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchtrackingComponent } from './batchtracking.component';

describe('BatchtrackingComponent', () => {
  let component: BatchtrackingComponent;
  let fixture: ComponentFixture<BatchtrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchtrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchtrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
