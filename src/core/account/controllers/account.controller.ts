import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiInit, ControllerInit } from 'src/decorators';
import { AccountCreateDTO, AccountUpdateDTO } from '../dtos';
import { Account } from '../models/account.model';
import { AccountService } from '../services';

@ControllerInit('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  @ApiInit('Create new account', Account)
  public async newAccount(@Body() data: AccountCreateDTO): Promise<Account> {
    try {
      return await this.accountService.create(data);
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
  @ApiInit('Get account by id', Account)
  public async findById(@Param('id') id: string): Promise<Account> {
    try {
      return await this.accountService.findById(id);
    } catch (error) {
      throw error;
    }
  }

  @Patch(':id')
  @ApiInit('Update account by id', Account)
  public async updateAccount(
    @Param('id') id: string,
    @Body() update: AccountUpdateDTO,
  ): Promise<Account> {
    try {
      return await this.accountService.update(id, update);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  @ApiInit('Delete account by id', Account)
  public async deleteAccount(@Param('id') id: string): Promise<Account> {
    try {
      return await this.accountService.remove(id);
    } catch (error) {
      throw error;
    }
  }
}
