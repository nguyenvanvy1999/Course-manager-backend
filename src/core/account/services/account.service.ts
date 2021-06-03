import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'src/core/base/tools';
import { AccountCreateDTO } from '../dtos';
import { Account, AccountDocument } from '../models/account.model';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name)
    private readonly accountModel: Model<AccountDocument>,
  ) {}

  public async newAccount(account: AccountCreateDTO): Promise<Account> {
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

  public async findById(_id: string): Promise<Account> {
    try {
      const account = await this.accountModel.findOne({ _id });
      if (!account)
        throw new NotFoundException(`Account with ${_id} not found`);
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
}
