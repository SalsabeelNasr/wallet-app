import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VouchersCardPage } from './vouchers-card.page';

describe('VouchersCardPage', () => {
  let component: VouchersCardPage;
  let fixture: ComponentFixture<VouchersCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VouchersCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VouchersCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
