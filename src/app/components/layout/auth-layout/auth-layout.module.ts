import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLayoutRoutingModule } from './auth-layout-routing.module';
import { AuthLayoutComponentComponent } from './auth-layout-component/auth-layout-component.component';


@NgModule({
  declarations: [
    AuthLayoutComponentComponent
  ],
  imports: [
    CommonModule,
    AuthLayoutRoutingModule
  ]
})
export class AuthLayoutModule { }
