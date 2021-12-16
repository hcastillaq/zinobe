import { reducerBank } from './bank.reducer';
import { reducerCredit } from './credit.reducer';

export const reducers = {
  credits: reducerCredit,
  bank: reducerBank,
};
