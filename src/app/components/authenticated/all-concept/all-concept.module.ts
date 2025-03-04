import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllConceptRoutingModule } from './all-concept-routing.module';
import { InputOutputComponent } from './input-output/input-output.component';
import { ColorBoxComponent } from './input-output/color-box/color-box.component';
import { ColorInputComponent } from './input-output/color-input/color-input.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RepeatTimeDirective } from '../../../shared/directives/repeat-time.directive';
import { PipesComponent } from './pipes/pipes.component';
import { CapitalPipe } from '../../../shared/pipes/capital.pipe';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SubjectComponent } from './subject/subject.component';

@NgModule({
  declarations: [
    InputOutputComponent,
    ColorInputComponent,
    ColorBoxComponent,
    DirectivesComponent,
    RepeatTimeDirective,
    PipesComponent,
    CapitalPipe,
    ReactiveFormComponent,
    RxjsComponent,
    SubjectComponent
  ],
  imports: [CommonModule, AllConceptRoutingModule,FormsModule,ReactiveFormsModule,],
})
export class AllConceptModule {}
