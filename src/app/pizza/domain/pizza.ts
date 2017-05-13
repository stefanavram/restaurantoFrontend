import {Review} from './review';

export interface Pizza{
  id: string;
  name: string;
  price: number;
  weight: number;
  image: string;
  ingredients: string;
  reviews: Review[];
  canPurchase: boolean;
  soldOut: boolean;
}
