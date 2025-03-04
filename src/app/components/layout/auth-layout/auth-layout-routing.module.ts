import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponentComponent } from './auth-layout-component/auth-layout-component.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthLayoutRoutingModule {}
