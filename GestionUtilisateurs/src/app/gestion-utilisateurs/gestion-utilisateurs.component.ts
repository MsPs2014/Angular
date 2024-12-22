import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertErrorComponent } from '../alert-error/alert-error.component';
import { AlertSuccessComponent } from '../alert-success/alert-success.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-utilisateurs',
  templateUrl: './gestion-utilisateurs.component.html',
  styleUrls: ['./gestion-utilisateurs.component.css'],
  standalone: true,
  imports: [CommonModule, AlertSuccessComponent, AlertErrorComponent,FormsModule],
})
export class GestionUtilisateursComponent {
  utilisateurs: { nom: string; prenom: string }[] = [];
  nom: string = '';
  prenom: string = '';
  showAlertSuccess: boolean = false;
  showAlertError: boolean = false;
  errorMessage: string = '';

  // Ajouter un utilisateur
  ajouterUtilisateur() {
    if (!this.nom || !this.prenom) {
      this.errorMessage = 'Veuillez remplir tous les champs.';
      this.showAlertError = true;
      this.showAlertSuccess = false;
    } else if (this.utilisateurs.length >= 5) {
      this.errorMessage = 'Le nombre d\'utilisateurs ne peut pas dépasser 5.';
      this.showAlertError = true;
      this.showAlertSuccess = false;
    } else {
      this.utilisateurs.push({ nom: this.nom, prenom: this.prenom });
      this.nom = '';
      this.prenom = '';
      this.showAlertSuccess = true;
      this.showAlertError = false;
    }
  }
}