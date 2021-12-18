import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUsersCreateComponent } from './page-users-create.component';

describe('PageUsersCreateComponent', () => {
  let component: PageUsersCreateComponent;
  let fixture: ComponentFixture<PageUsersCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUsersCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUsersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
