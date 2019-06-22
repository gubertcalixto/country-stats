import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { API_BASE_URL } from 'src/swagger/swag-proxy';
import { environment } from 'src/environments/environment';
import { SwaggerModule } from 'src/swagger/swagger-module';
import { LayoutModule } from './layout/layout.module';
import { MatButtonModule, MatIconModule, MatListModule, MatTabsModule, MatSidenavModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    SwaggerModule,
    AppRoutingModule
  ],
  providers: [
    { provide: API_BASE_URL, useValue: environment.backendUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
