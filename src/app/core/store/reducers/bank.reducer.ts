import { Action, createReducer, on } from '@ngrx/store';
import { actionsBankUpdateCapital } from '../actions/bank.actions';

export interface ReducerBankState {
  capital: number;
}
export const reducerBankInitialState: ReducerBankState = {
  capital: 0,
};
const reducer = createReducer<ReducerBankState>(
  reducerBankInitialState,
  on(actionsBankUpdateCapital, (state, payload) => {
    return { ...state, capital: payload.capital };
  })
);

export const reducerBank = (
  state: ReducerBankState | undefined,
  action: Action
) => {
  return reducer(state, action);
};
