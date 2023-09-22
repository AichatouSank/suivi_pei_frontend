import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointFocalDashboardComponent } from './point-focal-dashboard.component';

describe('PointFocalDashboardComponent', () => {
  let component: PointFocalDashboardComponent;
  let fixture: ComponentFixture<PointFocalDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PointFocalDashboardComponent]
    });
    fixture = TestBed.createComponent(PointFocalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
