import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserAddComponent } from '../user-add/user-add.component';
import { IUser } from 'src/app/interfaces/User/user.interface';
@Component({
  selector: 'app-user-add-button',
  templateUrl: './user-add-button.component.html',
  styleUrls: ['./user-add-button.component.scss'],
})
export class UserAddButtonComponent {
  constructor(public dialog: MatDialog) {}

  @Output() userAdded = new EventEmitter<IUser>();

  openAddUserDialog() {
    const dialogRef = this.dialog.open(UserAddComponent, {
      width: '700px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Usuário criado:', result);
        this.userAdded.emit(result);
      }
    });
  }
}
