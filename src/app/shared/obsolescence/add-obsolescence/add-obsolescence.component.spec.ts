import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddObsolescenceComponent } from './add-obsolescence.component';

describe('AddObsolescenceComponent', () => {
  let component: AddObsolescenceComponent;
  let fixture: ComponentFixture<AddObsolescenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddObsolescenceComponent]
    });
    fixture = TestBed.createComponent(AddObsolescenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
