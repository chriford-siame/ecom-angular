import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-white shadow-md rounded-xl p-6 flex flex-col relative">
      <div class="mx-auto">
        <img [src]="product().image" class="h-[100px] w-[200px] object-contain" alt="image">
      </div>
      <div class="flex flex-col">
        <span class="text-md font-bold">{{product().title}}</span>
        <span class="text-md">{{'$' + product().price}}</span>
        <app-primary-button label="Add to Cart" class="mt-3 w-full" (action)="cartService.addToCart(product())"/>
      </div>
      <div class="absolute top-2 right-3 text-sm font-bold" [class]="product().stock ? 'text-green-500' : 'text-red-500'">
        @if (product().stock ) {
          {{product().stock}} left
        } @else {
          Out of stock
        }
      </div>
    </div>
  `,
  styles: ``
})
export class ProductCardComponent {

  cartService = inject(CartService);

  product = input.required<Product>();
}
