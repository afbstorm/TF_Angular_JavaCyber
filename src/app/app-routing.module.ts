import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'demos', loadChildren: () => 
    import('./demo/demo.module').then(m => m.DemoModule)
  },
  {path: 'exercices', loadChildren: () =>
    import('./exercices/exercices.module').then(m => m.ExercicesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
