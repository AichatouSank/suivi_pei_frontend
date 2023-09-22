import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentDgsiDashboardComponent } from './agent-dgsi-dashboard.component';

describe('AgentDgsiDashboardComponent', () => {
  let component: AgentDgsiDashboardComponent;
  let fixture: ComponentFixture<AgentDgsiDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentDgsiDashboardComponent]
    });
    fixture = TestBed.createComponent(AgentDgsiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
