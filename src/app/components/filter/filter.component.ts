import { Component, EventEmitter, Output } from '@angular/core';
import { IUserFilter } from 'src/app/interfaces/user-filter.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  filterOptions: IUserFilter = {
    name: '',
    startDate: undefined,
    endDate: undefined,
    status: 0,
  };

  @Output() filterAppliedEmmit = new EventEmitter<IUserFilter>();

  SendFilter(event: Event): void {
    event.preventDefault();
    this.filterAppliedEmmit.emit(this.filterOptions);
  }

  statusList = [
    { value: 0, viewValue: 'Todos' },
    { value: true, viewValue: 'Ativo' },
    { value: false, viewValue: 'Inativo' },
  ];
}
