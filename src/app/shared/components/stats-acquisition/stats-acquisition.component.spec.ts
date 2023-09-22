import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsAcquisitionComponent } from './stats-acquisition.component';

describe('StatsAcquisitionComponent', () => {
  let component: StatsAcquisitionComponent;
  let fixture: ComponentFixture<StatsAcquisitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatsAcquisitionComponent]
    });
    fixture = TestBed.createComponent(StatsAcquisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
