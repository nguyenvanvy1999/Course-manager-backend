import { ControllerInit } from 'src/decorators';
import { RoleService } from '../services';

@ControllerInit('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}
}
