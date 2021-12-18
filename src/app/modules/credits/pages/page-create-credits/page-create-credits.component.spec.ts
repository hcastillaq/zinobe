import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateCreditsComponent } from './page-create-credits.component';

describe('PageCreateCreditsComponent', () => {
  let component: PageCreateCreditsComponent;
  let fixture: ComponentFixture<PageCreateCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCreateCreditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreateCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
