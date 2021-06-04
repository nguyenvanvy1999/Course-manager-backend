import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'src/core/base/tools';
import { RoleCreateDTO } from '../dtos';
import { Role, RoleDocument } from '../models';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role.name) private readonly roleModel: Model<RoleDocument>,
  ) {}

  public async create(role: RoleCreateDTO): Promise<Role> {
    try {
      const newRole = new this.roleModel({
        _id: ObjectId(),
        name: role.name,
        createdBy: role.createdBy,
        updatedBy: role.createdBy,
      });
      await newRole.save();
      return newRole;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
