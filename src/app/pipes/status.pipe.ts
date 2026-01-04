import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(status: boolean): string {
    const Invalid_Status = status === null || status === undefined;
    if (Invalid_Status) return 'Status inválido';

    return status ? 'Ativo' : 'Inativo';
  }
}
