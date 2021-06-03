import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId, ObjectIds } from 'src/core/base/tools';
import { CourseCreateDTO, CourseUpdateDTO } from '../dtos';
import { Course, CourseDocument } from '../models';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course.name)
    private readonly courseModel: Model<CourseDocument>,
  ) {}

  public async create(course: CourseCreateDTO): Promise<Course> {
    try {
      const newCourse = new this.courseModel({
        _id: ObjectId(),
        ...course,
        videos: ObjectIds(course.videos),
      });
      await newCourse.save();
      return newCourse;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async findAll(): Promise<Course[]> {
    try {
      return await this.courseModel.find({});
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async findById(id: string): Promise<Course> {
    try {
      return await this.courseModel.findById(ObjectId(id));
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async update(id: string, update: CourseUpdateDTO): Promise<Course> {
    try {
      return await this.courseModel.findOneAndUpdate(
        { _id: ObjectId(id) },
        { ...update, videos: ObjectIds(update.videos) },
        { new: true },
      );
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async remove(id: string): Promise<Course> {
    try {
      return await this.courseModel.findOneAndDelete({ _id: ObjectId(id) });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
