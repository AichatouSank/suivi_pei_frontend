import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrevisionComponent } from './add-prevision.component';

describe('AddPrevisionComponent', () => {
  let component: AddPrevisionComponent;
  let fixture: ComponentFixture<AddPrevisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPrevisionComponent]
    });
    fixture = TestBed.createComponent(AddPrevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
