import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCapitalComponent } from './bank-capital.component';

describe('BankCapitalComponent', () => {
  let component: BankCapitalComponent;
  let fixture: ComponentFixture<BankCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankCapitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
