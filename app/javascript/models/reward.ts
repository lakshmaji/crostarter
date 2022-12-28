import { IContribution } from './contribution';

export interface IReward {
  id?: number;
  title: string;
  description: string;
  amount: number;
  contributions?: IContribution[];
}
