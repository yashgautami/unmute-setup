import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupTherapistPage } from './signup-therapist.page';

describe('SignupTherapistPage', () => {
  let component: SignupTherapistPage;
  let fixture: ComponentFixture<SignupTherapistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupTherapistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
