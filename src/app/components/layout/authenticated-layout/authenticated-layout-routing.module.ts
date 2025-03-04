import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../authenticated/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'all-concept',
    loadChildren: () =>
      import('../../authenticated/all-concept/all-concept.module').then(
        (m) => m.AllConceptModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticatedLayoutRoutingModule {}
