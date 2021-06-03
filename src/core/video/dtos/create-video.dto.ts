import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { CheckMongoId, CheckString } from 'src/decorators';
import { Course } from '../../course/models';

export class VideoCreationDTO {
  @ApiProperty({
    description: 'Title of video',
    required: true,
    type: String,
    default: 'this is title',
  })
  @CheckString()
  readonly title: string;

  @ApiProperty({
    description: 'Description of video',
    required: true,
    type: String,
    default: 'this is description',
  })
  @CheckString()
  readonly description: string;

  @ApiProperty({
    description: 'thumbnailUrl of video',
    required: true,
    type: String,
    default: 'this is thumbnailUrl',
  })
  @CheckString()
  readonly thumbnailUrl?: string;

  @ApiProperty({
    description: 'Video url of video',
    required: false,
    type: String,
    default: 'this is video url',
  })
  @CheckString()
  readonly videoUrl?: string;

  @ApiProperty({
    description: 'Course id',
    type: Types.ObjectId,
    required: false,
    default: new Course()._id, //FIXME:
  })
  @CheckMongoId(true)
  readonly course?: string;
}
