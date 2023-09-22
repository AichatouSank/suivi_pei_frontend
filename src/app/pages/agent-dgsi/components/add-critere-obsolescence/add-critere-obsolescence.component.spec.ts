import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCritereObsolescenceComponent } from './add-critere-obsolescence.component';

describe('AddCritereObsolescenceComponent', () => {
  let component: AddCritereObsolescenceComponent;
  let fixture: ComponentFixture<AddCritereObsolescenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCritereObsolescenceComponent]
    });
    fixture = TestBed.createComponent(AddCritereObsolescenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
