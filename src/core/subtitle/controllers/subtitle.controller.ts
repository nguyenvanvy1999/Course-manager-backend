import { ControllerInit } from 'src/decorators';
import { SubtitleService } from '../services';

@ControllerInit('subtitles')
export class SubtitleController {
  constructor(private readonly subtitleService: SubtitleService) {}
}
