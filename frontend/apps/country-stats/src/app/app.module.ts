import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatListModule, MatTabsModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import {SwaggerModule} from "../swagger/swagger-module";
import {API_BASE_URL} from "../swagger/swag-proxy";
import {environment} from "../environments/environment";
import {CgoInterceptor} from "../swagger/CgoInterceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";


@NgModule({
  declarations: [AppComponent],
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CgoInterceptor,
      multi: true
    },
    { provide: API_BASE_URL, useValue: environment.backendUrl  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
