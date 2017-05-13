import {Injectable, Inject} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Pizza} from '../domain/pizza';
import {PizzaService, PIZZA_SERVICE} from './pizza.service';

@Injectable()
export class PizzaResolver implements Resolve<Pizza> {


  constructor(@Inject(PIZZA_SERVICE) private pizzaService: PizzaService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Pizza>|boolean {
    return this.pizzaService.getPizza(route.params['id']).then(pizza => {
      console.log(pizza);
      if (pizza) {
        return pizza;
      } else {
        this.router.navigate(['/home']);
        return false;
      }
    });
  }
}
