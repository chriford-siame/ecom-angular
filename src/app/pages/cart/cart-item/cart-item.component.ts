import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { ButtonComponent } from "../button/button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
    <div class="bg-white shadow-md rounded-xl p-6 flex gap-4 items-center">
      <img [src]="item().image" class="w-[50px] h-[50px] object-contain" alt="">
      <div class="flex flex-col">
        <span class="text-md font-bold">{{item().title}}</span>
        <span class="text-sm">{{'$' + item().price}}</span>
      </div>
      <div class="flex-1"></div>
      <app-button label="Remove" (action)="cartService.removeItem(item().id)" />
    </div>
  `,
  styles: ``
})
export class CartItemComponent {
  item = input.required<Product>();

  cartService = inject(CartService);
}
