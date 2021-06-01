import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountCreateDTO, AccountDTO, AccountUpdateDTO } from '../dtos';
import { Account } from '../entities';
import { mapAccountToAccountDTO } from '../tools/mapper.tool';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}

  public async createNewAccount(account: AccountCreateDTO): Promise<Account> {
    try {
      return this.accountRepository.save(account);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  public async findOne(username: string): Promise<Account> {
    try {
      return this.accountRepository.findOne({ where: { username } });
    } catch (error) {
      throw error;
    }
  }

  public async findById(id: string): Promise<AccountDTO> {
    try {
      const account = await this.accountRepository.findOne(id);
      if (!account) throw new NotFoundException(`Account with ${id} not found`);
      return mapAccountToAccountDTO(account);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  public async findAll(): Promise<any> {
    try {
      const accounts = await this.accountRepository.find();
      return accounts.map(mapAccountToAccountDTO);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async update(
    id: string,
    update: AccountUpdateDTO,
  ): Promise<AccountDTO> {
    try {
      const account = await this.accountRepository.save({ id, ...update });
      return mapAccountToAccountDTO(account);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async remove(id: string): Promise<boolean> {
    try {
      const result = await this.accountRepository.delete({ id });
      return result.affected !== null;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
