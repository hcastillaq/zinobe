import { createAction, props } from '@ngrx/store';
import { User } from '../../interfaces/user.interface';

export enum ActionsUsers {
  SET_USERS = '[USERS] SET USERS',
}

export const actionsUsersSetUsers = createAction(
  ActionsUsers.SET_USERS,
  props<{ users: User[] }>()
);
