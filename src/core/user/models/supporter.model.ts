import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { schemaOption } from 'src/core/base/constants';
import { Base } from 'src/core/base/models';
import { ISupporter } from '../interfaces';

export type SupporterDocument = Supporter & Document;
@Schema(schemaOption)
export class Supporter extends Base implements ISupporter {
  @Prop(schemaOption)
  user: Types.ObjectId;
}

export const SupporterSchema = SchemaFactory.createForClass(Supporter);
