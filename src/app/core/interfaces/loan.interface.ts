import { Credit } from "./credit.interface";
import { User } from "./user.interface";

export interface Loan {
  credit:Credit,
  user: User
}