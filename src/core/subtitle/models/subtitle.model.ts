import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { schemaOption } from 'src/core/base/constants';
import { Base } from 'src/core/base/models';
import { ISubtitle } from '../interfaces';

export type SubtitleDocument = Subtitle & Document;
@Schema(schemaOption)
export class Subtitle extends Base implements ISubtitle {
  @Prop({ type: Types.ObjectId, required: true, ref: 'Video' })
  video: Types.ObjectId;

  @Prop({
    type: [Types.ObjectId],
    required: true,
    minlength: 1,
    ref: 'SubLines',
  })
  subLines: Types.ObjectId[];

  @Prop({ type: String, required: true, default: 'Vietnamese' })
  language: string;
}
export const SubtitleSchema = SchemaFactory.createForClass(Subtitle);
