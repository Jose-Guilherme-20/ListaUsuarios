import { Component, EventEmitter, Output } from '@angular/core';
import { UserList } from 'src/app/data/user-list';
import { IUser } from 'src/app/interfaces/User/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  users: IUser[] = UserList;
  displayedColumns: string[] = ['name', 'date', 'status'];

  dataSource = this.users;

  @Output() userSelected = new EventEmitter<IUser>();

  onUserSelected(user: IUser): void {
    console.log('User selected:', user);
    this.userSelected.emit(user);
  }
}
