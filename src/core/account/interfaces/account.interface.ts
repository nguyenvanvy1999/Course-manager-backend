import { Types } from 'mongoose';

export interface IAccount {
  _id: Types.ObjectId;
  username: string;
  password: string;
  user: Types.ObjectId;
}
