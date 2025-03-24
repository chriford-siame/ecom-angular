import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { CartItemComponent } from "./cart-item/cart-item.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent],
  template: `
    <div class="p-8 flex flex-col gap-4">
      <p class="h2">Shopping Cart</p>
      @for (item of cartItems(); track item.id) {
        <app-cart-item [product]="item" />
      }
    </div>
  `,
  styles: ``
})
export class CartComponent {
  cartItems = signal<Product[]>([]);
}
