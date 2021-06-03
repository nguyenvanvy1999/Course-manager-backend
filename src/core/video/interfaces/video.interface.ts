import { Types } from 'mongoose';

export interface IVideo {
  _id: Types.ObjectId;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  publishAt: Date;
  course: Types.ObjectId;
  subtitles: Types.ObjectId[];
}
