import { BadRequestException, Get } from '@nestjs/common';
import { ControllerInit } from 'src/decorators';
import { UserService } from '../services';

@ControllerInit('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('test')
  public async test() {
    try {
      throw new BadRequestException('Test error');
    } catch (error) {
      throw error;
    }
  }
}
