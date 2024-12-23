import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'serviceApplication';

  users = this.usersService.getAll();

  constructor(private usersService: UserService) {}

  addUser() {
    this.usersService.add({id:0,name:"Ahmed"})
  }

  update() {
    this.usersService.update({id:0,name:"Aladin"})
  }

  getAll() {
    this.usersService.getAll();
  }
}
