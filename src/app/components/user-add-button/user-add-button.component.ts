import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserAddComponent } from '../user-add/user-add.component';
@Component({
  selector: 'app-user-add-button',
  templateUrl: './user-add-button.component.html',
  styleUrls: ['./user-add-button.component.scss'],
})
export class UserAddButtonComponent {
  constructor(public dialog: MatDialog) {}

  openAddUserDialog() {
    const dialogRef = this.dialog.open(UserAddComponent, {
      width: '700px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Usuário criado:', result);
        // aqui você chama sua API
      }
    });
  }
}
