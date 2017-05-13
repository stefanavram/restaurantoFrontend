import {OpaqueToken} from '@angular/core';

import {Pizza} from '../domain/pizza';
import {Review} from '../domain/review';

export interface PizzaService {
  getPizzas(): Promise<Pizza[]>;
  getPizza(id: string): Promise<Pizza>;
  addReview(pizza: Pizza, review: Review): Promise<Pizza>;
}

export let PIZZA_SERVICE = new OpaqueToken('app.pizza.service');
