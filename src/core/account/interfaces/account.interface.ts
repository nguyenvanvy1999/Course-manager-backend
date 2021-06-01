import { IUser } from 'src/core/user/interfaces';

export interface IAccount {
  id: string;
  username: string;
  password: string;
  user: IUser;
}
