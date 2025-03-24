import { Component, input } from '@angular/core';
import { Product } from '../../../models/products.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  template: `
    <div>
      {{product().id}}
    </div>
  `,
  styles: ``
})
export class ProductCardComponent {
  product = input.required<Product>();
}
