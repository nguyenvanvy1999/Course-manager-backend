import { IUser } from 'src/core/user/interfaces';

export interface IRole {
  id: string;
  name: string;
  users: IUser[];
}
