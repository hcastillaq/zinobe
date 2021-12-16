import { Action, createReducer } from '@ngrx/store';

export interface ReducerBankState {
  capital: number;
}
export const reducerBankInitialState: ReducerBankState = {
  capital: 9999999,
};
const reducer = createReducer<ReducerBankState>(reducerBankInitialState);

export const reducerBank = (
  state: ReducerBankState | undefined,
  action: Action
) => {
  return reducer(state, action);
};
