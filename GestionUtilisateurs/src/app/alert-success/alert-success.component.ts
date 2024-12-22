import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-success',
  template: `
    <div class="alert alert-success">
      <strong>Succès!</strong> L'utilisateur a été ajouté avec succès.
    </div>
  `,
  styles: [
    `
      .alert {
        padding: 15px;
        margin: 10px 0;
        border-radius: 5px;
        color: white;
        background-color: #4caf50; /* Vert pour le succès */
      }
    `,
  ],standalone: true,
})
export class AlertSuccessComponent {}
