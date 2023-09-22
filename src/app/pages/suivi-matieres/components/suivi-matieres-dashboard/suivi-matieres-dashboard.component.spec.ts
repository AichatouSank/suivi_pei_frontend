import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviMatieresDashboardComponent } from './suivi-matieres-dashboard.component';

describe('SuiviMatieresDashboardComponent', () => {
  let component: SuiviMatieresDashboardComponent;
  let fixture: ComponentFixture<SuiviMatieresDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuiviMatieresDashboardComponent]
    });
    fixture = TestBed.createComponent(SuiviMatieresDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
