import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionHistoryPage } from './session-history.page';

describe('SessionHistoryPage', () => {
  let component: SessionHistoryPage;
  let fixture: ComponentFixture<SessionHistoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
