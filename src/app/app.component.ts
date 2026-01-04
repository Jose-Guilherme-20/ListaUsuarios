import { Component } from '@angular/core';
import { IUser } from './interfaces/User/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ListaUsuarios';

  selectedUser: IUser = {} as IUser;
  showUserDetails: boolean = false;

  userSelected(user: IUser): void {
    this.selectedUser = user;
    this.showUserDetails = true;
  }
}
