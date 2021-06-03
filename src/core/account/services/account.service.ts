import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'src/core/base/tools';
import { AccountCreateDTO, AccountUpdateDTO } from '../dtos';
import { Account, AccountDocument } from '../models';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name)
    private readonly accountModel: Model<AccountDocument>,
  ) {}

  public async create(account: AccountCreateDTO): Promise<Account> {
    try {
      const newAccount = new this.accountModel({
        _id: ObjectId(),
        ...account,
      });
      await newAccount.save();
      return newAccount;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async findById(id: string): Promise<Account> {
    try {
      const account = await this.accountModel.findOne({ _id: ObjectId(id) });
      if (!account) throw new NotFoundException(`Account with ${id} not found`);
      return account;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  public async findAll(): Promise<Account[]> {
    try {
      return await this.accountModel.find({});
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async update(id: string, update: AccountUpdateDTO): Promise<Account> {
    try {
      return await this.accountModel.findOneAndUpdate(
        { _id: ObjectId(id) },
        { ...update },
        { new: true },
      );
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async remove(id: string): Promise<Account> {
    try {
      return await this.accountModel.findOneAndDelete({ _id: ObjectId(id) });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
