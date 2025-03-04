import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputOutputComponent } from './input-output/input-output.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"input-output",
    pathMatch:"full"
  },
  {
    path:"input-output",
    component:InputOutputComponent,
    pathMatch:"full"
  },
  {
    path:"directives",
    component:DirectivesComponent,
    pathMatch:"full"
  },
  {
    path:"pipes",
    component:PipesComponent,
    pathMatch:"full"
  },
  {
    path:"reactive-form",
    component:ReactiveFormComponent,
    pathMatch:"full"
  },
  {
    path:"rxjs",
    component:RxjsComponent,
    pathMatch:"full"
  },
  {
    path:"subject",
    component:SubjectComponent,
    pathMatch:"full"
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllConceptRoutingModule { }
