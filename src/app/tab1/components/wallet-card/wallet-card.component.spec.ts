import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletCardPage } from './wallet-card.page';

describe('WalletCardPage', () => {
  let component: WalletCardPage;
  let fixture: ComponentFixture<WalletCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
