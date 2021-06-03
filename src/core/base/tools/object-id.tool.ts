import { Types } from 'mongoose';

export const ObjectId = (_id?: string): Types.ObjectId => {
  return Types.ObjectId(_id);
};

export const ObjectIds = (_ids: string[]): Types.ObjectId[] => {
  return _ids.map((_id) => Types.ObjectId(_id));
};
