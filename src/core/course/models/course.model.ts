import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { schemaOption } from 'src/core/base/constants';
import { Base } from 'src/core/base/models';
import { ICourse } from '../interfaces';

export type CourseDocument = Course & Document;
@Schema(schemaOption)
export class Course extends Base implements ICourse {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ required: true, type: String })
  description: string;

  @Prop({ type: String, required: true })
  thumbnailUrl: string;

  @Prop({ type: [Types.ObjectId], ref: 'Video', required: true })
  videos: Types.ObjectId[];
}
export const CourseSchema = SchemaFactory.createForClass(Course);
