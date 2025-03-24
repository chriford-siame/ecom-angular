import { Component, input } from '@angular/core';
import { Product } from '../../../models/products.model';

@Component({
  selector: 'app-cart-item',
  imports: [],
  template: `
    <div>
      cart-item works!
      {{product()?.title}}
    </div>
  `,
  styles: ``
})
export class CartItemComponent {
  product = input<Product>();
}
