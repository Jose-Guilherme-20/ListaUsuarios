import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/User/user.interface';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  private apiUrl = `${environment.apiUrl}/User`;

  // GET - Listar todos
  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.apiUrl);
  }

  // GET - Buscar por ID
  getById(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.apiUrl}/${id}`);
  }

  // POST - Criar
  create(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(this.apiUrl, user);
  }

  // PUT - Atualizar
  update(id: number, user: IUser): Observable<void> {
    return this.httpClient.put<void>(`${this.apiUrl}/${id}`, user);
  }

  // DELETE - Remover
  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
