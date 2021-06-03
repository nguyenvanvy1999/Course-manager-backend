import { PartialType } from '@nestjs/swagger';
import { CourseCreateDTO } from './create-course.dto';

export class CourseUpdateDTO extends PartialType(CourseCreateDTO) {}
