import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { ExercicesComponent } from './exercices.component';
import { ChronoComponent } from './chrono/chrono.component';
import { ButtonModule } from 'primeng/button';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExercicesComponent,
    ChronoComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    ExercicesRoutingModule,
    ButtonModule,
    FormsModule
  ]
})
export class ExercicesModule { }
