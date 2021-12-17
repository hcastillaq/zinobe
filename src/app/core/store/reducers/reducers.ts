import { reducerBank } from './bank.reducer';
import { reducerCredit } from './credit.reducer';
import { reducerUser } from './user.reducer';

export const reducers = {
  credits: reducerCredit,
  bank: reducerBank,
  user: reducerUser,
};
