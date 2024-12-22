import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-error',
  standalone: true,
  imports: [],
  template: `
    <div class="alert alert-error">
      <strong>Erreur!</strong> {{ message }}
    </div>
  `,  // Template inline
  styles: [`
    .alert {
      padding: 15px;
      margin: 10px 0;
      border-radius: 5px;
      color: white;
    }

    .alert-error {
      background-color: #f44336; /* Rouge pour l'erreur */
    }
  `],
})
export class AlertErrorComponent {
  message: string = 'Une erreur est survenue.';
}
