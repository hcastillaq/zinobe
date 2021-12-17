import { createAction, props } from '@ngrx/store';
import { Credit } from '../../interfaces/credit.interface';

export enum ActionsUsers {
  SET_CREDITS = '[CREDIT] SET_CREDITS',
  UPDATE_CREDIT = '[CREDIT] UPDATE_CREDIT',
}

export const actionsCreditSetCredits = createAction(
  ActionsUsers.SET_CREDITS,
  props<{ credits: Credit[] }>()
);

export const actionsCreditUpdateCredit = createAction(
  ActionsUsers.UPDATE_CREDIT,
  props<{ credit: Credit }>()
);
