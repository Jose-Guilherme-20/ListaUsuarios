import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/User/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];
  @Input({ required: true }) users: IUser[] = [];
  dataSource = this.users;
  @Output() userSelected = new EventEmitter<IUser>();

  onUserSelected(user: IUser): void {
    console.log('User selected:', user);
    this.userSelected.emit(user);
  }
}
