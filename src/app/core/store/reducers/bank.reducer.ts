import { Action, createReducer } from "@ngrx/store";

export interface ReducerBank {}
export const reducerBankInitialState :ReducerBank = {

}
const reducer = createReducer(reducerBankInitialState);

export const reducerBank = (state:ReducerBank, action: Action) => {
  return reducer(state, action)
}