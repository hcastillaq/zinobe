import { User } from "./user.interface";

export interface Credit {
  date: string,
  approved: boolean,
  paid: boolean,
  mount: number
}