import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsolescenceComponent } from './obsolescence.component';

describe('ObsolescenceComponent', () => {
  let component: ObsolescenceComponent;
  let fixture: ComponentFixture<ObsolescenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObsolescenceComponent]
    });
    fixture = TestBed.createComponent(ObsolescenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
