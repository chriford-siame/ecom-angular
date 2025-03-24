import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { CART } from '../../fixture/cart';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent],
  template: `
    <div class="p-8 flex flex-col gap-4">
      <p class="text-2xl font-bold">Shopping Cart</p>
      @for (item of cartItems(); track item.id) {
        <app-cart-item [item]="item" />
      }
    </div>
  `,
  styles: ``
})
export class CartComponent {
  cartItems = signal<Product[]>(CART);
}
