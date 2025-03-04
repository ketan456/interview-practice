import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AlertComponentComponent } from '../../reusable-component/alert-component/alert-component.component';
import { CustomButtonComponent } from '../../reusable-component/alert-component/custom-button/custom-button.component';
import { FooterComponent } from '../../layout/authenticated-layout/footer/footer.component';


@NgModule({
  declarations: [DashbordComponent, ],
  imports: [CommonModule, DashboardRoutingModule, AlertComponentComponent,CustomButtonComponent],
})
export class DashboardModule {}
