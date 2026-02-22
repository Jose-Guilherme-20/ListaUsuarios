import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/User/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { UserAddComponent } from '../user-add/user-add.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ['name', 'date', 'status'];
  @Input({ required: true }) users: IUser[] = [];
  dataSource = this.users;
  @Output() userSelected = new EventEmitter<IUser>();

  onUserSelected(user: IUser): void {
    console.log('User selected:', user);
    this.userSelected.emit(user);
  }

  openAddUserDialog() {
    const dialogRef = this.dialog.open(UserAddComponent, {
      width: '700px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Usuário atualizado:', result);
      }
    });
  }
}
