import { ApiProperty } from '@nestjs/swagger';
import { CheckMongoId, CheckString } from 'src/decorators';

export class RoleCreateDTO {
  @ApiProperty({ description: 'Name of role', required: true, type: String })
  @CheckString()
  name: string;

  @ApiProperty({ type: String, required: true, description: 'Id of creator' })
  @CheckMongoId(true)
  createdBy: string;
}
