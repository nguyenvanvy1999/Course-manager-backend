import { Types } from 'mongoose';

export interface ISubtitle {
  video: Types.ObjectId;
  subLines: Types.ObjectId[];
  language: string;
}
