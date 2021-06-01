import { ControllerInit } from 'src/decorators';
import { AccountService } from '../services';

@ControllerInit('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}
}
