import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button class="text-black w-full py-2 px-4 hover:cursor-pointer rounded-xl shadow-md " (click)="handleBtnClick()">
      {{ label() }}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  label = input('');
  action = output();

  handleBtnClick() {
    this.action.emit();
  }
}
