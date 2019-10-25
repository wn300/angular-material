import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiIndexComponent } from './ui-index.component';

describe('UiIndexComponent', () => {
  let component: UiIndexComponent;
  let fixture: ComponentFixture<UiIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
