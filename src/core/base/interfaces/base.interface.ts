import { Types } from 'mongoose';

export interface IBase {
  _id: Types.ObjectId;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  deletedAt?: Date;
  deletedBy?: string;
}
