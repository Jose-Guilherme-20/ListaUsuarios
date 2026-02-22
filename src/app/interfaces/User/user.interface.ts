import { IAddress } from './address.interface';
import { IStatus } from './status.interface';

export interface IUser {
  nome: string;
  email: string;
  idade: number;
  endereco: IAddress;
  telefone: string;
  profissao: string;
  ativo: boolean;
  dataCadastro: string;
  // status: IStatus;
}
