import { Bank } from './bank.interface';
import { User } from './user.interface';

export interface Credit {
  id: string;
  user_id: string;
  user: User;
  date?: string;
  approved: boolean;
  paid: boolean;
  amount: number;
}
