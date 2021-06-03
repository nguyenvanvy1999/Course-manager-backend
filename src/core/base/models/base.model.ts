import { Prop, Schema } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import { IBase } from '../interfaces';

@Schema()
export abstract class Base extends Document implements IBase {
  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId;

  @Prop({ type: Date })
  createdAt?: Date;

  @Prop({ type: String })
  createdBy?: string;

  @Prop({ type: Date })
  updatedAt?: Date;

  @Prop({ type: String })
  updatedBy?: string;

  @Prop({ type: Date })
  deletedAt?: Date;

  @Prop({ type: String })
  deletedBy?: string;
}
