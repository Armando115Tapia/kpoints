export interface IGetKPointsResponse {
  merchantId: string;
  merchantName: string;
  points: number;
}
export interface IGetKPointHistoryResponse {
  history: IGetKPointHistory[];
}
export interface IGetKPointHistory {
  date: string;
  operator: string;
  points: string;
}
