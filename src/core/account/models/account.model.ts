import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { schemaOption } from 'src/core/base/constants';
import { Base } from 'src/core/base/models';
import { IAccount } from '../interfaces';

export type AccountDocument = Account & Document;
@Schema(schemaOption)
export class Account extends Base implements IAccount {
  @Prop({ type: String, required: true, trim: true, unique: true })
  username: string;

  @Prop({ type: String, required: true, min: 5 })
  password: string;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: Types.ObjectId;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
