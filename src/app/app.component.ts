import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/User/user.interface';
import { set } from 'date-fns';
import { UserList } from './data/user-list';
import { IUserFilter } from './interfaces/user-filter.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ListaUsuarios';
  userList: IUser[] = [];
  selectedUser: IUser = {} as IUser;
  showUserDetails: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.userList = UserList;
    }, 1000);
  }

  userSelected(user: IUser): void {
    this.selectedUser = user;
    this.showUserDetails = true;
  }

  OnFilter(filter: IUserFilter): void {
    console.log('Filter applied:', filter);
  }
}
