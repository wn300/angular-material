import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTraceabilityComponent } from './ui-traceability/ui-traceability.component';

import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [UiTraceabilityComponent],
  imports: [
    CommonModule,
    MatSliderModule
  ]
})
export class TraceabilityModule { }
