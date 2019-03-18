import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatDividerModule, MatIconModule, MatTooltipModule } from '@angular/material';

import { WidgetsSettingsComponent } from './widgets-settings/widgets-settings.component';

@NgModule({
  declarations: [WidgetsSettingsComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatDividerModule,
    MatTooltipModule,
    DragDropModule
  ],
  exports: [WidgetsSettingsComponent]
})
export class WidgetsModule { }
