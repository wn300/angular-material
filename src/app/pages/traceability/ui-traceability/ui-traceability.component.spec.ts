import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTraceabilityComponent } from './ui-traceability.component';

describe('UiTraceabilityComponent', () => {
  let component: UiTraceabilityComponent;
  let fixture: ComponentFixture<UiTraceabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiTraceabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTraceabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
