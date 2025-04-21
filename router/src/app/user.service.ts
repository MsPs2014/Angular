import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private users: string[] = [];

  getUsers(): string[] {
    return this.users;
  }

  addUser(name: string) {
    if (name.trim()) {
      this.users.push(name.trim());
    }
  }

  getUserCount(): number {
    return this.users.length;
  }
}