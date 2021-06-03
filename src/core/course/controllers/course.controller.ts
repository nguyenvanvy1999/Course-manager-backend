import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiInit, ControllerInit } from 'src/decorators';
import { CourseCreateDTO, CourseUpdateDTO } from '../dtos';
import { Course } from '../models';
import { CourseService } from '../services';

@ControllerInit('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  @ApiInit('Find all course', [Course])
  public async findAll(): Promise<Course[]> {
    try {
      return await this.courseService.findAll();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  @ApiInit('Get course by id', Course)
  public async findById(@Param('id') id: string): Promise<Course> {
    try {
      return await this.courseService.findById(id);
    } catch (error) {
      throw error;
    }
  }

  @Post()
  @ApiInit('Create new course', Course)
  public async createNewCourse(
    @Body() course: CourseCreateDTO,
  ): Promise<Course> {
    try {
      return await this.courseService.create(course);
    } catch (error) {
      throw error;
    }
  }

  @Patch(':id')
  @ApiInit('Update course', Course)
  public async updateCourse(
    @Param('id') id: string,
    @Body() update: CourseUpdateDTO,
  ): Promise<Course> {
    try {
      return await this.courseService.update(id, update);
    } catch (error) {
      throw error;
    }
  }

  @Delete()
  @ApiInit('Delete course', Course)
  public async deleteCourse(@Param('id') id: string): Promise<Course> {
    try {
      return await this.courseService.remove(id);
    } catch (error) {
      throw error;
    }
  }
}
