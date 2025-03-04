import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponentComponent } from './components/layout/auth-layout/auth-layout-component/auth-layout-component.component';
import { AuthenticatedLayoutComponent } from './components/layout/authenticated-layout/authenticated-layout/authenticated-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponentComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/layout/auth-layout/auth-layout.module').then(
            (m) => m.AuthLayoutModule
          ),
      },
    ],
  },
  {
    path: '',
    component: AuthenticatedLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './components/layout/authenticated-layout/authenticated-layout.module'
          ).then((m) => m.AuthenticatedLayoutModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
