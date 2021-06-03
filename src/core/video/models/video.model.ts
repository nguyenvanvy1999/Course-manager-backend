import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { schemaOption } from 'src/core/base/constants';
import { Base } from 'src/core/base/models';
import { IVideo } from '../interfaces';

export type VideoDocument = Video & Document;
@Schema(schemaOption)
export class Video extends Base implements IVideo {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String, required: true })
  videoUrl: string;

  @Prop({ type: Date, required: true, default: new Date() })
  publishAt: Date;

  @Prop({ type: String, required: true })
  thumbnailUrl: string;

  @Prop({ type: Types.ObjectId, required: true, ref: 'Course' })
  course: Types.ObjectId;

  @Prop({ type: [Types.ObjectId], required: true, ref: 'Subtitle' })
  subtitles: Types.ObjectId[];
}

export const VideoSchema = SchemaFactory.createForClass(Video);
