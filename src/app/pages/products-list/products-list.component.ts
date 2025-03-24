import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { PRODUCTS } from '../../fixture/products';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      @for (product of products(); track product.id) {
        <app-product-card [product]="product" />
      }
    </div>
  `,
  styles: ``
})
export class ProductsListComponent {
  products = signal<Product[]>(PRODUCTS)
}
