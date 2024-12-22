import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { GestionUtilisateursComponent } from './app/gestion-utilisateurs/gestion-utilisateurs.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
