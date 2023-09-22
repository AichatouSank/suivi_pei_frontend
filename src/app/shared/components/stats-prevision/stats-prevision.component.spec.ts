import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsPrevisionComponent } from './stats-prevision.component';

describe('StatsPrevisionComponent', () => {
  let component: StatsPrevisionComponent;
  let fixture: ComponentFixture<StatsPrevisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatsPrevisionComponent]
    });
    fixture = TestBed.createComponent(StatsPrevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
