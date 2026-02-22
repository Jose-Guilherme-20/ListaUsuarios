import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/User/user.interface';
import { UserList } from './data/user-list';
import { UsersService } from './data/users.service';
import { IUserFilter } from './interfaces/user-filter.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ListaUsuarios';
  userList: IUser[] = [];
  userListFiltered: IUser[] = [];
  selectedUser: IUser = {} as IUser;
  showUserDetails: boolean = false;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  userSelected(user: IUser): void {
    this.selectedUser = user;
    this.showUserDetails = true;
  }

  OnFilter(filter: IUserFilter): void {
    console.log('Filter received in AppComponent:', filter);
    this.userListFiltered = this.filterUserList(filter, this.userList);
  }

  filterUserList(filter: IUserFilter, userList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];
    filteredList = this.userListFilterByName(userList, filter.name);
    console.log('After name filter:', filteredList);
    filteredList = this.userListFilterByStatus(filteredList, filter.status);
    console.log('After status filter:', filteredList);
    filteredList = this.userListFilterByDate(
      filteredList,
      filter.startDate,
      filter.endDate,
    );
    console.log('After date filter:', filteredList);
    return filteredList;
  }
  userListFilterByStatus(
    userList: IUser[],
    status: boolean | 0 | null,
  ): IUser[] {
    if (status === undefined || status === null || status === 0)
      return userList;
    return userList.filter((user) => user.ativo === status);
  }
  userListFilterByDate(
    filteredList: IUser[],
    startDate: Date | undefined,
    endDate: Date | undefined,
  ): IUser[] {
    if (!startDate && !endDate) return filteredList;
    return filteredList.filter((user) => {
      const userDate = new Date(user.dataCadastro);
      if (startDate && userDate < startDate) return false;
      if (endDate && userDate > endDate) return false;
      return true;
    });
  }

  userListFilterByName(userList: IUser[], nome: string): IUser[] {
    if (!nome) return userList;
    return userList.filter((user) =>
      user.nome.toLowerCase().includes(nome.toLowerCase()),
    );
  }

  loadUsers(): void {
    this.userService.getAll().subscribe({
      next: (data) => ((this.userList = data), (this.userListFiltered = data)),
      error: (err) => console.error(err),
    });
  }

  addUser(newUser: IUser): void {
    console.log('new user', newUser);
    this.userService.create(newUser).subscribe({
      next: (createdUser) => {
        console.log('Usuário criado:', createdUser);
        this.userList = [...this.userList, createdUser];
        this.userListFiltered = [...this.userListFiltered, createdUser];
      },
      error: (err) => console.error('Erro ao criar usuário:', err),
    });
  }
}
