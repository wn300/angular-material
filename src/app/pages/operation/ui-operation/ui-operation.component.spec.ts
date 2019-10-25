import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiOperationComponent } from './ui-operation.component';

describe('UiOperationComponent', () => {
  let component: UiOperationComponent;
  let fixture: ComponentFixture<UiOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
