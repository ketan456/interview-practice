import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticatedLayoutRoutingModule } from './authenticated-layout-routing.module';
import { AuthenticatedLayoutComponent } from './authenticated-layout/authenticated-layout.component';
import { ActualBodyComponent } from './actual-body/actual-body.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SublevelMenuComponent } from './sidebar/sublevel-menu.component';


@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    AuthenticatedLayoutComponent,
    NavbarComponent,
    SublevelMenuComponent,
    ActualBodyComponent,
  ],
  imports: [
    CommonModule,
    AuthenticatedLayoutRoutingModule
  ]
})
export class AuthenticatedLayoutModule { }
