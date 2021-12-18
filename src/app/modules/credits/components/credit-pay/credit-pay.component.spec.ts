import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditPayComponent } from './credit-pay.component';

describe('CreditPayComponent', () => {
  let component: CreditPayComponent;
  let fixture: ComponentFixture<CreditPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
