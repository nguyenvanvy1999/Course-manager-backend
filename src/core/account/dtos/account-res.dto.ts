import { ApiProperty, PickType } from '@nestjs/swagger';
import { User } from 'src/core/user/entities';
import { IUser } from 'src/core/user/interfaces';
import { AccountCreateDTO } from './account-create.dto';

export class AccountResDTO extends PickType(AccountCreateDTO, ['username']) {
  @ApiProperty({
    description: 'Id of account',
    type: String,
    readOnly: true,
    required: true,
  })
  readonly id: string;

  @ApiProperty({ description: 'User' })
  readonly user: IUser;
}
