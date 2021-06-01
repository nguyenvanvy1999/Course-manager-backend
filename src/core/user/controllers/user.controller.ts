import { BadRequestException, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from '../services';

@Controller('user')
@ApiTags('user')
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
