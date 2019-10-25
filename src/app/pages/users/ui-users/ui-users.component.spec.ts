import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUsersComponent } from './ui-users.component';

describe('UiUsersComponent', () => {
  let component: UiUsersComponent;
  let fixture: ComponentFixture<UiUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
