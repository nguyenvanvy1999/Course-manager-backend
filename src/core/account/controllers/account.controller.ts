import { Controller } from '@nestjs/common';
import { AccountService } from '../services';

@Controller()
export class AccountController {
  constructor(private readonly accountService: AccountService) {}
}
