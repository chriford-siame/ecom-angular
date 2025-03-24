import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div class="bg-slate-100 px-4 py-5 shadow-md flex justify-between items-center">
      <button class="text-xl hover:cursor-pointer" routerLink="/">My Store</button>
      <div>
        <app-primary-button [label]="'Cart (' + cartService.cartItems().length + ')'" routerLink="/cart" />
      </div>
    </div>
    `,
  styles: ``
})
export class HeaderComponent {
  cartService = inject(CartService);

}
