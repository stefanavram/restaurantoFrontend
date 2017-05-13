import {Component, Inject} from '@angular/core';
import {Pizza} from '../../domain/pizza';
import {PIZZA_SERVICE, PizzaService} from '../../services/pizza.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css'],
})
export class PizzasComponent {

  private pizzas: Pizza[];

  constructor(@Inject(PIZZA_SERVICE) private pizzaService: PizzaService) {

    this.getPizzas();
  }

  getPizzas(): void {
    this.pizzaService
      .getPizzas()
      .then(pizzas => this.pizzas = pizzas);
  }
}
