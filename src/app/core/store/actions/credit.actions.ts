import { createAction, props } from '@ngrx/store';
import { Credit } from '../../interfaces/credit.interface';

export enum ActionsUsers {
  SET_CREDITS = '[CREDIT] SET_CREDITS',
  SET_CREDIT = '[CREDIT] SET_CREDIT',
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
export const actionsCreditSetCredit = createAction(
  ActionsUsers.SET_CREDIT,
  props<{ credit: Credit }>()
);
