import { Action, createReducer, on } from '@ngrx/store';
import { Credit } from '../../interfaces/credit.interface';
import {
  actionsCreditSetCredit,
  actionsCreditSetCredits,
  actionsCreditUpdateCredit,
} from '../actions/credit.actions';

export interface ReducerCredit {
  credits: Credit[];
}

export const reducerCreditInitialState: ReducerCredit = {
  credits: [],
};

const reducer = createReducer<ReducerCredit>(
  reducerCreditInitialState,
  on(actionsCreditSetCredits, (state, payload) => {
    return { ...state, credits: payload.credits };
  }),
  on(actionsCreditSetCredit, (state, payload) => {
    return { ...state, credits: [payload.credit, ...state.credits] };
  }),
  on(actionsCreditUpdateCredit, (state, payload) => {
    return {
      ...state,
      credits: state.credits.map((credit) =>
        credit.id === payload.credit.id ? payload.credit : credit
      ),
    };
  })
);

export const reducerCredit = (
  state: ReducerCredit | undefined,
  action: Action
) => {
  return reducer(state, action);
};
