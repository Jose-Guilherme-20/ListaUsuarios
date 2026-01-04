import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  selectedStatus: string = 'all';

  statusList = [
    { value: 'all', viewValue: 'All' },
    { value: 'active', viewValue: 'Active' },
    { value: 'inactive', viewValue: 'Inactive' },
  ];
  viewConsoleStatus(event: any) {
    console.log(this.selectedStatus);
  }
}
