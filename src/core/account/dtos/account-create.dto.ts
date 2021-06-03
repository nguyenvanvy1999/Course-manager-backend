import { ApiProperty } from '@nestjs/swagger';
import { CheckString } from 'src/decorators';

export class AccountCreateDTO {
  @ApiProperty({
    description: 'Username',
    default: 'Username',
    type: String,
    required: true,
  })
  @CheckString()
  readonly username: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'Password',
    default: 'Password',
    minLength: 5,
  })
  @CheckString(true, 5)
  readonly password: string;
}
