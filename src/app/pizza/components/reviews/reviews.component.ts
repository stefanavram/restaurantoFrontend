import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Review} from '../../domain/review';

@Component({
  selector: 'app-reviews',
  templateUrl: 'reviews.component.html',
  styleUrls: ['reviews.component.css'],
})
export class ReviewsComponent {

  @Input()
  public reviews: Review[];

  @Output()
  public addReview = new EventEmitter<Review>();

  public newReview: Review;

  constructor() {
    this.newReview = <Review>{};
  }

  public onSubmit() {
    this.newReview.createdOn = new Date().getMilliseconds();
    this.addReview.emit(this.newReview);
    this.newReview = <Review>{};
  }
}
