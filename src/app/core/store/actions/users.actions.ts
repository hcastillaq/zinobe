import { createAction, props } from '@ngrx/store';
import { User } from '../../interfaces/user.interface';

export enum ActionsUsers {
  SET_USERS = '[USERS] SET USERS',
  SET_USER = '[USERS] SET USER',
}

export const actionsUsersSetUsers = createAction(
  ActionsUsers.SET_USERS,
  props<{ users: User[] }>()
);

export const actionsUsersSetUser = createAction(
  ActionsUsers.SET_USER,
  props<{ user: User }>()
);
