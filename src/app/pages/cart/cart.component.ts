import { Component, inject } from '@angular/core';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent],
  template: `
    <div class="p-8 flex flex-col gap-4">
      <p class="text-2xl font-bold">Shopping Cart</p>
      @for (item of cartService.cartItems(); track item.id) {
        <app-cart-item [item]="item" />
      }
    </div>
  `,
  styles: ``
})
export class CartComponent {
  cartService = inject(CartService);
}
