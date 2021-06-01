import { Body, Get, Param, Patch } from '@nestjs/common';
import { ApiInit, ControllerInit } from 'src/decorators';
import { AccountDTO, AccountUpdateDTO } from '../dtos';
import { AccountService } from '../services';

@ControllerInit('Accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  @ApiInit('Get all account', AccountDTO)
  public async findAll(): Promise<AccountDTO> {
    try {
      return await this.accountService.findAll();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  public async findById(@Param('id') id: string): Promise<AccountDTO> {
    try {
      return await this.accountService.findById(id);
    } catch (error) {
      throw error;
    }
  }

  @Patch(':id	')
  public async update(
    @Param('id') id: string,
    @Body() update: AccountUpdateDTO,
  ): Promise<AccountDTO> {
    try {
      return await this.accountService.update(id, update);
    } catch (error) {
      throw error;
    }
  }
}
