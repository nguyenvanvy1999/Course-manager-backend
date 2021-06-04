import { PartialType } from '@nestjs/swagger';
import { VideoCreationDTO } from './create-video.dto';

export class VideoUpdateDTO extends PartialType(VideoCreationDTO) {}
