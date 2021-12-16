import { Action, createReducer } from "@ngrx/store";


interface ReducerCredit {

}

export const reducerCreditInitialState : ReducerCredit ={

}

const reducer = createReducer<ReducerCredit>(reducerCreditInitialState)


export  const  reducerCredit = (state : ReducerCredit, action : Action) => {
  return reducer(state, action)
}