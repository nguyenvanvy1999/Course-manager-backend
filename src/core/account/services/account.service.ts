import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from '../entities';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}

  public async findOne(username: string): Promise<Account | undefined> {
    try {
      return this.accountRepository.findOne({ where: { username } });
    } catch (error) {
      throw error;
    }
  }
}
