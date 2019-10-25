import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiProgramationComponent } from './ui-programation.component';

describe('UiProgramationComponent', () => {
  let component: UiProgramationComponent;
  let fixture: ComponentFixture<UiProgramationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiProgramationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiProgramationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
