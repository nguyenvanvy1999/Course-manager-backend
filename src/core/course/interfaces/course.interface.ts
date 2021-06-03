import { Types } from 'mongoose';

export interface ICourse {
  _id: Types.ObjectId;
  title: string;
  description: string;
  thumbnailUrl: string;
  videos: Types.ObjectId[];
}
