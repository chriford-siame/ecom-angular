import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cartItems.set([...this.cartItems(), product])
  }

  constructor() { }
}
