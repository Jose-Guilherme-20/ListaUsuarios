export interface IUserFilter {
  name: string;
  startDate?: Date;
  endDate?: Date;
  status: boolean | 0 | null;
}
