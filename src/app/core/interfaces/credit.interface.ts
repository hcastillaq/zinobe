import { User } from "./user.interface";

export interface Credit {
  user : User
  date: string,
  approved: boolean,
  paid: boolean,
  mount: number
}