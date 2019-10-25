import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiUsersComponent } from './ui-users/ui-users.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [UiUsersComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule
  ]
})
export class UsersModule { }
