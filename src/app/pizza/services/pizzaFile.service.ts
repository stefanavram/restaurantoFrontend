import {Injectable} from '@angular/core';

import {PizzaService} from './pizza.service';

import {Pizza} from '../domain/pizza';
import {PIZZAS} from '../domain/data';
import {Review} from '../domain/review';

@Injectable()
export class PizzaFileService implements PizzaService {
  getPizzas(): Promise<Pizza[]> {
    return Promise.resolve(PIZZAS);
  }

  getPizza(id: string): Promise<Pizza> {
    PIZZAS.forEach(pizza => {
      if (pizza.id === id) {
        return Promise.resolve(pizza);
      }
    });
    return Promise.resolve(null);
  }

  addReview(pizza: Pizza, review: Review): Promise<Pizza> {
    throw new Error('addReview not supported for PizzaFileService');
  }
}
