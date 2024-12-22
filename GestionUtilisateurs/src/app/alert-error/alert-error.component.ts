import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-error',
  
  template: `
    <div class="alert alert-error">
      <strong>Erreur!</strong> {{ message }}
    </div>
  `,
  styles: [
    `
      .alert {
        padding: 15px;
        margin: 10px 0;
        border-radius: 5px;
        color: white;
      }

      .alert-error {
        background-color: #f44336; /* Rouge pour l'erreur */
      }
    `,
  ],standalone: true,
})
export class AlertErrorComponent {
  @Input() message: string = '';
}
