import { ReducerBankState } from '../store/reducers/bank.reducer';
import { ReducerCredit } from '../store/reducers/credit.reducer';

export interface Reducers {
  bank: ReducerBankState;
  credits: ReducerCredit;
}
