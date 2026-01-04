export interface IUserFilter {
  name: string;
  startDate?: Date;
  endDate?: Date;
  status: 'all' | 'active' | 'inactive';
}
