import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListCreditsComponent } from './page-list-credits.component';

describe('PageListCreditsComponent', () => {
  let component: PageListCreditsComponent;
  let fixture: ComponentFixture<PageListCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListCreditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
