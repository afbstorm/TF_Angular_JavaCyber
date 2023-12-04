import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { BindingsComponent } from './bindings/bindings.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './input-output/parent/parent.component';
import { FakeAuthComponent } from './services/fake-auth/fake-auth.component';

const routes: Routes = [
  {path: '', component: DemoComponent, children: [
    {path: 'bindings', component: BindingsComponent},
    {path: 'pipes', component: PipesComponent},
    {path: 'directives', component: DirectivesComponent},
    {path: 'parent', component: ParentComponent},
    {path: 'services', component: FakeAuthComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
