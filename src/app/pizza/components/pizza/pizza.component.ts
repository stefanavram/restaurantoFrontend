import {Component, OnInit, Inject} from '@angular/core';
import {Pizza} from '../../domain/pizza';
import {ActivatedRoute} from '@angular/router';
import {Review} from '../../domain/review';
import {PIZZA_SERVICE, PizzaService} from '../../services/pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
})
export class PizzaComponent implements OnInit {

  private pizza: Pizza;

  constructor(private route: ActivatedRoute,
              @Inject(PIZZA_SERVICE) private pizzaService: PizzaService) {
  }

  ngOnInit(): void {
    this.route.data.forEach((data: {pizza: Pizza}) => {
      console.log(data);
      this.pizza = data.pizza;
    });
  }

  public addReview(review: Review) {
    this.pizzaService.addReview(this.pizza, review)
      .then(() => this.pizza.reviews.push(review));
  }
}
