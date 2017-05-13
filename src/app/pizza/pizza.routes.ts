import {Routes} from '@angular/router';
import {PizzasComponent} from './components/pizzas/pizzas.component';
import {PizzaComponent} from './components/pizza/pizza.component';
import {PizzaResolver} from './services/pizza.resolver';

export const ROUTES: Routes = [
  {
    path: 'pizzas', children: [
    {path: '', component: PizzasComponent},
    {path: ':id', component: PizzaComponent, resolve: {pizza: PizzaResolver}}]
  }
];
