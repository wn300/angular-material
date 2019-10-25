import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UiOperationComponent } from "./ui-operation/ui-operation.component";
import { DragDropModule } from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [UiOperationComponent],
  imports: [CommonModule, DragDropModule]
})
export class OperationModule {}
