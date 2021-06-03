import { ApiProperty } from '@nestjs/swagger';
import { IsUrl } from 'class-validator';
import { CheckString } from 'src/decorators';

export class CourseCreateDTO {
  @ApiProperty({
    description: 'Title of course',
    type: String,
    required: true,
    default: 'Title',
  })
  @CheckString()
  readonly title: string;

  @ApiProperty({
    description: 'Description of course',
    type: String,
    required: true,
    default: 'Description',
  })
  @CheckString()
  readonly description: string;

  @ApiProperty({
    description: 'Thumbnail url of course',
    required: true,
    type: String,
    format: 'url',
  })
  @CheckString()
  @IsUrl()
  readonly thumbnailUrl: string;

  @ApiProperty({ description: 'Videos of course', required: false })
  readonly videos: string[];
}
