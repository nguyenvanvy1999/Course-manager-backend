import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { schemaOption } from 'src/core/base/constants';
import { Base } from 'src/core/base/models';
import { IRole } from '../interfaces';

export type RoleDocument = Role & Document;
@Schema(schemaOption)
export class Role extends Base implements IRole {
  @Prop({ type: String, required: true, trim: true })
  name: string;

  @Prop({ type: [Types.ObjectId], required: true, minlength: 1 })
  users: Types.ObjectId[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);
