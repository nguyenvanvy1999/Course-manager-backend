import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'src/core/base/tools';
import { User, UserDocument } from '../models';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  public async getRoles(id: string): Promise<string[]> {
    try {
      const roles = await this.userModel
        .findById(ObjectId(id))
        .populate('Roles');
      return roles.roles.map((role: any) => role.name);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
