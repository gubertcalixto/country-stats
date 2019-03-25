import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatButtonToggleModule, MatIconModule, MatMenuModule, MatTabsModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatTabsModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class LayoutModule { }
