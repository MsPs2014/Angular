import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [];

  add(user: User): void {
    console.log("Utilisateur ajouté");
  }

  update(user: User): void {
    console.log("Utilisateur modifié")
  }

  getAll(): Array<User> {
    console.log("La liste des utilisateurs")
    return [...this.users];
  }
}
