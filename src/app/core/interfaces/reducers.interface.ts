import { ReducerBankState } from '../store/reducers/bank.reducer';
import { ReducerCredit } from '../store/reducers/credit.reducer';
import { ReducerUser } from '../store/reducers/user.reducer';

export interface Reducers {
  bank: ReducerBankState;
  credits: ReducerCredit;
  user: ReducerUser;
}
