import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/User/address.interface';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {
  transform(address: IAddress): string {
    const INVALID_ADRESS =
      !address ||
      !address.rua ||
      !address.cidade ||
      !address.estado ||
      !address.cep ||
      address.numero === undefined ||
      address.numero === null;

    if (INVALID_ADRESS) return 'Endereço inválido';

    return `${address.rua}, ${address.numero} - ${address.cidade}/${address.estado} - CEP: ${address.cep}`;
  }
}
