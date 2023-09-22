import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementInformatiqueComponent } from './equipement-informatique.component';

describe('EquipementInformatiqueComponent', () => {
  let component: EquipementInformatiqueComponent;
  let fixture: ComponentFixture<EquipementInformatiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipementInformatiqueComponent]
    });
    fixture = TestBed.createComponent(EquipementInformatiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
