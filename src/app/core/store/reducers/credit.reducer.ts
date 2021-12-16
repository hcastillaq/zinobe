import { Action, createReducer } from '@ngrx/store';

export interface ReducerCredit {}

export const reducerCreditInitialState: ReducerCredit = {};

const reducer = createReducer<ReducerCredit>(reducerCreditInitialState);

export const reducerCredit = (
  state: ReducerCredit | undefined,
  action: Action
) => {
  return reducer(state, action);
};
