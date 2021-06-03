import { PartialType } from '@nestjs/mapped-types';
import { VideoCreationDTO } from './create-video.dto';

export class VideoUpdateDTO extends PartialType(VideoCreationDTO) {}
