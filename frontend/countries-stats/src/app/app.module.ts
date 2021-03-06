import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatTabsModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { CgoInterceptor } from 'src/swagger/CgoInterceptor';
import { API_BASE_URL } from 'src/swagger/swag-proxy';
import { SwaggerModule } from 'src/swagger/swagger-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {pt} from "../i18n/pt";
import {en} from "../i18n/en";


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
    TranslateModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: API_BASE_URL, useValue: environment.backendUrl },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CgoInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(translateService: TranslateService){
    translateService.setTranslation('pt', pt);
    translateService.setTranslation('en', en);
    translateService.setDefaultLang('pt');
    translateService.use('pt');
  }
}
