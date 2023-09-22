import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsStructureComponent } from './stats-structure.component';

describe('StatsStructureComponent', () => {
  let component: StatsStructureComponent;
  let fixture: ComponentFixture<StatsStructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatsStructureComponent]
    });
    fixture = TestBed.createComponent(StatsStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
