import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-slate-100 px-4 py-5 shadow-md flex justify-between items-center">
      <span>My Store</span>
      <div>
        <app-primary-button label="Cart" (action)="cartItemViewer()" />
      </div>
    </div>
    `,
  styles: ``
})
export class HeaderComponent {
  cartItemViewer() {
    console.log("my cart!")
  }

}
