import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountCreateDTO, AccountDTO, AccountUpdateDTO } from '../dtos';
import { Account, AccountDocument } from '../models/account.model';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name)
    private readonly accountModel: Model<AccountDocument>,
  ) {}

  // public async createNewAccount(account: AccountCreateDTO): Promise<Account> {
  //   try {
  //     return this.accountRepository.save(account);
  //   } catch (error) {
  //     throw new InternalServerErrorException(error);
  //   }
  // }
  // public async findOne(username: string): Promise<Account> {
  //   try {
  //     return this.accountRepository.findOne({ where: { username } });
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // public async findById(id: string): Promise<AccountDTO> {
  //   try {
  //     const account = await this.accountRepository.findOne(id);
  //     if (!account) throw new NotFoundException(`Account with ${id} not found`);
  //     return mapAccountToAccountDTO(account);
  //   } catch (error) {
  //     throw new InternalServerErrorException(error);
  //   }
  // }
  // public async findAll(): Promise<any> {
  //   try {
  //     const accounts = await this.accountRepository.find();
  //     return accounts.map(mapAccountToAccountDTO);
  //   } catch (error) {
  //     throw new InternalServerErrorException(error);
  //   }
  // }

  // public async update(
  //   id: string,
  //   update: AccountUpdateDTO,
  // ): Promise<AccountDTO> {
  //   try {
  //     const account = await this.accountRepository.save({ id, ...update });
  //     return mapAccountToAccountDTO(account);
  //   } catch (error) {
  //     throw new InternalServerErrorException(error);
  //   }
  // }

  // public async remove(id: string): Promise<boolean> {
  //   try {
  //     const result = await this.accountRepository.delete({ id });
  //     return result.affected !== null;
  //   } catch (error) {
  //     throw new InternalServerErrorException(error);
  //   }
  // }
}
