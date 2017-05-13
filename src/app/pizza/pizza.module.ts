import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';


import {PIZZA_SERVICE} from './services/pizza.service';
import {PizzasComponent} from './components/pizzas/pizzas.component';
import {PizzaComponent} from './components/pizza/pizza.component';
import {ROUTES} from './pizza.routes';
import {PizzaRestService} from './services/pizzaRest.service';
import {PizzaResolver} from './services/pizza.resolver';
import {ReviewsComponent} from './components/reviews/reviews.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    PizzasComponent,
    PizzaComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule.forChild(ROUTES),
    TranslateModule
  ],
  exports: [],
  providers: [
    {provide: PIZZA_SERVICE, useClass: PizzaRestService},
    PizzaResolver
  ]
})
export class PizzaModule {
}
