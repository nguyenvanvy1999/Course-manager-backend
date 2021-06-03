import { ControllerInit } from 'src/decorators';
import { CourseService } from '../services';

@ControllerInit('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
}
