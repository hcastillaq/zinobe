import { Store } from "../../interfaces/store.interface";
import { reducerBank } from "./bank.reducer";
import { reducerCredit } from "./credit.reducer";

export const Reducers : Store = {
  credits: reducerCredit,
  bank: reducerBank
}