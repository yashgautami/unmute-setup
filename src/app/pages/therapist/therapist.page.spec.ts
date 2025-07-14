import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TherapistPage } from './therapist.page';

describe('TherapistPage', () => {
  let component: TherapistPage;
  let fixture: ComponentFixture<TherapistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
