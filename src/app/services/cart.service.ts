import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';
import { CART } from '../fixture/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = signal<Product[]>(CART);

  addToCart(product: Product) {
    this.cartItems.set([...this.cartItems(), product])
  }

  removeItem(id: number) {
    this.cartItems.set(this.cartItems().filter((p) => p.id !== id));
  }

  constructor() { }
}
