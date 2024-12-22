import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertErrorComponent } from './alert-error/alert-error.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AlertSuccessComponent, AlertErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alert';
}
