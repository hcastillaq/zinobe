import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUsersListComponent } from './page-users-list.component';

describe('PageUsersListComponent', () => {
  let component: PageUsersListComponent;
  let fixture: ComponentFixture<PageUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUsersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
