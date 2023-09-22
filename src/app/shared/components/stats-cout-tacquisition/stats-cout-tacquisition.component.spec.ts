import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCoutTAcquisitionComponent } from './stats-cout-tacquisition.component';

describe('StatsCoutTAcquisitionComponent', () => {
  let component: StatsCoutTAcquisitionComponent;
  let fixture: ComponentFixture<StatsCoutTAcquisitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatsCoutTAcquisitionComponent]
    });
    fixture = TestBed.createComponent(StatsCoutTAcquisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
