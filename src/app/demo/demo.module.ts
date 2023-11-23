import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { BindingsComponent } from './bindings/bindings.component';
import { PipesComponent } from './pipes/pipes.component';
import { LetterPipe } from './letter-to-number.pipe';
import { DirectivesComponent } from './directives/directives.component';
import { ChildComponent } from './input-output/child/child.component';
import { ParentComponent } from './input-output/parent/parent.component';


@NgModule({
  declarations: [
    DemoComponent,
    BindingsComponent,
    PipesComponent,
    LetterPipe,
    DirectivesComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule
  ]
})
export class DemoModule { }
