import { Body, Get, Param, Post } from '@nestjs/common';
import { ApiInit, ControllerInit } from 'src/decorators';
import { AccountCreateDTO } from '../dtos';
import { Account } from '../models/account.model';
import { AccountService } from '../services';

@ControllerInit('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  @ApiInit('Create new account', Account)
  public async newAccount(@Body() data: AccountCreateDTO): Promise<Account> {
    try {
      return await this.accountService.newAccount(data);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  @ApiInit('Get all account', [Account])
  public async findAll(): Promise<Account[]> {
    try {
      return await this.accountService.findAll();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  public async findById(@Param('id') id: string): Promise<Account> {
    try {
      return await this.accountService.findById(id);
    } catch (error) {
      throw error;
    }
  }
}
