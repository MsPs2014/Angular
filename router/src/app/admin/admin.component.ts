import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  newUser: string = '';
  users: string[] = [];

  constructor(private userService: UserService) {
    this.refreshUsers();
  }

  addUser() {
    this.userService.addUser(this.newUser);
    this.newUser = '';
    this.refreshUsers();
  }

  refreshUsers() {
    this.users = this.userService.getUsers();
  }
}
