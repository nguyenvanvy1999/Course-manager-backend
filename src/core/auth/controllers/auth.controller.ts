import { ControllerInit } from 'src/decorators';
import { AuthService } from '../services';

@ControllerInit('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
}
