import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { schemaOption } from 'src/core/base/constants';
import { Base } from 'src/core/base/models';
import { IMod } from '../interfaces';

export type ModDocument = Mod & Document;
@Schema(schemaOption)
export class Mod extends Base implements IMod {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: Types.ObjectId;
}

export const ModSchema = SchemaFactory.createForClass(Mod);
