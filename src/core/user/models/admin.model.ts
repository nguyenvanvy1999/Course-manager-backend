import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { schemaOption } from 'src/core/base/constants';
import { Base } from 'src/core/base/models';
import { IAdmin } from '../interfaces';

export type AdminDocument = Admin & Document;
@Schema(schemaOption)
export class Admin extends Base implements IAdmin {
  @Prop({ type: Types.ObjectId, required: true, ref: 'User	' })
  user: Types.ObjectId;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
