import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenCardPage } from './token-card.page';

describe('TokenCardPage', () => {
  let component: TokenCardPage;
  let fixture: ComponentFixture<TokenCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
