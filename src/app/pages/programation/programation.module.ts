import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiProgramationComponent } from './ui-programation/ui-programation.component';

import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [UiProgramationComponent],
  imports: [
    CommonModule,
    DragDropModule
  ]
})
export class ProgramationModule { }
