import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercicesComponent } from './exercices.component';
import { ChronoComponent } from './chrono/chrono.component';

const routes: Routes = [
  {path: '', component: ExercicesComponent, children: [
    {path: 'chrono', component: ChronoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercicesRoutingModule { }
