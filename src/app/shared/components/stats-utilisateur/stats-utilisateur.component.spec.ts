import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsUtilisateurComponent } from './stats-utilisateur.component';

describe('StatsUtilisateurComponent', () => {
  let component: StatsUtilisateurComponent;
  let fixture: ComponentFixture<StatsUtilisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatsUtilisateurComponent]
    });
    fixture = TestBed.createComponent(StatsUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
