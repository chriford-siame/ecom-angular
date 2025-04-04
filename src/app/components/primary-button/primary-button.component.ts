import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button class="bg-blue-500 hover:cursor-pointer text-white border px-5 w-full py-2 rounded shadow-md hover:opacity-90" (click)="handleButtonClick()">
      {{ label() }}
    </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {
  label = input('');

  action = output();

  handleButtonClick() {
    this.action.emit();
  }
}
