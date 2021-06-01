import { ApiProperty, OmitType } from '@nestjs/swagger';
import { AccountCreateDTO } from './account-create.dto';

export class AccountDTO extends OmitType(AccountCreateDTO, ['password']) {
  @ApiProperty({
    description: 'Account email',
    required: true,
    readOnly: true,
    format: 'email',
  })
  email: string;

  @ApiProperty({
    description: 'Create at',
    type: String,
    required: true,
    format: 'date-time',
  })
  createdAt: string;

  @ApiProperty({
    description: 'Roles',
    type: [String],
    required: true,
    minItems: 1,
  })
  roles: string[];
}
