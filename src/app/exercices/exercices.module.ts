import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { ExercicesComponent } from './exercices.component';
import { ChronoComponent } from './chrono/chrono.component';
import { ButtonModule } from 'primeng/button';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';
import { AddEuroSymbolPipe } from '../add-euro-symbol.pipe';
import { CartComponent } from './shopping-cart-2/cart/cart.component';
import { ArticleComponent } from './shopping-cart-2/article/article.component';
import {Article2Component} from "./shopping-cart-3/article/article2.component";


@NgModule({
  declarations: [
    ExercicesComponent,
    ChronoComponent,
    ShoppingCartComponent,
    AddEuroSymbolPipe,
    CartComponent,
    ArticleComponent,
    Article2Component
  ],
  imports: [
    CommonModule,
    ExercicesRoutingModule,
    ButtonModule,
    FormsModule
  ]
})
export class ExercicesModule { }
