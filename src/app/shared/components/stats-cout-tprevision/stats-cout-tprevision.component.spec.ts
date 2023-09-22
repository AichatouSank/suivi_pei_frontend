import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCoutTPrevisionComponent } from './stats-cout-tprevision.component';

describe('StatsCoutTPrevisionComponent', () => {
  let component: StatsCoutTPrevisionComponent;
  let fixture: ComponentFixture<StatsCoutTPrevisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatsCoutTPrevisionComponent]
    });
    fixture = TestBed.createComponent(StatsCoutTPrevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
