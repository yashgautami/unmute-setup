import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindTherapistPage } from './find-therapist.page';

describe('FindTherapistPage', () => {
  let component: FindTherapistPage;
  let fixture: ComponentFixture<FindTherapistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTherapistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
