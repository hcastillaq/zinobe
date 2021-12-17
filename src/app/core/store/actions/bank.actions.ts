import { createAction, props } from '@ngrx/store';

export enum ActionsBank {
  UPDATE_CAPITAL = '[BANK] UPDATE CAPITAL',
}

export const actionsBankUpdateCapital = createAction(
  ActionsBank.UPDATE_CAPITAL,
  props<{ capital: number }>()
);
