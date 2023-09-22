import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsEquipementAcquisComponent } from './stats-equipement-acquis.component';

describe('StatsEquipementAcquisComponent', () => {
  let component: StatsEquipementAcquisComponent;
  let fixture: ComponentFixture<StatsEquipementAcquisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatsEquipementAcquisComponent]
    });
    fixture = TestBed.createComponent(StatsEquipementAcquisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
