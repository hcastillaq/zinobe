import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../interfaces/user.interface';
import { actionsUsersSetUsers } from '../actions/users.actions';

export interface ReducerUser {
  users: User[];
}

export const reducerCreditInitialState: ReducerUser = {
  users: [],
};

const reducer = createReducer<ReducerUser>(
  reducerCreditInitialState,
  on(actionsUsersSetUsers, (state, { users }) => {
    return { ...state, users: users };
  })
);

export const reducerUser = (state: ReducerUser | undefined, action: Action) => {
  return reducer(state, action);
};
