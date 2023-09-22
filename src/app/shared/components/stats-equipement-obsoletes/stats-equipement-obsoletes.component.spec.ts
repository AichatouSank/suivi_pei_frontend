import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsEquipementObsoletesComponent } from './stats-equipement-obsoletes.component';

describe('StatsEquipementObsoletesComponent', () => {
  let component: StatsEquipementObsoletesComponent;
  let fixture: ComponentFixture<StatsEquipementObsoletesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatsEquipementObsoletesComponent]
    });
    fixture = TestBed.createComponent(StatsEquipementObsoletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
