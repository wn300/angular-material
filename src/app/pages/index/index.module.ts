import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UiIndexComponent } from "./ui-index/ui-index.component";
import { MatStepperModule } from "@angular/material/stepper";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material';

@NgModule({
  declarations: [UiIndexComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class IndexModule {}
