import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { globelInterceptor } from './service/globel.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RepeatTimeDirective } from './shared/directives/repeat-time.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [provideHttpClient(withInterceptors([globelInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {}
