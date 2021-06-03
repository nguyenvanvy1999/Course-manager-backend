import { ControllerInit } from 'src/decorators';
import { SubtitleService } from '../services';

@ControllerInit('subtitle')
export class SubtitleController {
  constructor(private readonly subtitleService: SubtitleService) {}
}
