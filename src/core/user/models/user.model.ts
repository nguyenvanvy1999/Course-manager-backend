import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail } from 'class-validator';
import { Document, Types } from 'mongoose';
import { schemaOption } from 'src/core/base/constants';
import { Base } from 'src/core/base/models';
import { IUser } from '../interfaces';

export type UserDocument = User & Document;
@Schema(schemaOption)
export class User extends Base implements IUser {
  @Prop({ type: String, required: true, trim: true })
  @IsEmail()
  email: string;

  @Prop({ type: String, required: true, trim: true })
  fullName: string;

  @Prop({ type: Types.ObjectId, required: true, ref: 'Account' })
  account: Types.ObjectId;

  @Prop({ type: [Types.ObjectId], required: true, minlength: 1, ref: 'Role' })
  roles: Types.ObjectId[];

  @Prop({ type: Types.ObjectId, required: false, ref: 'Admin' })
  admin?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: false, ref: 'Mod' })
  mod?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: false, ref: 'Supporter' })
  supporter?: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);
