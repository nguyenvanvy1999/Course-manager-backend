import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Video, VideoDocument } from '../models';
import { CACHE_MANAGER, Inject, NotFoundException } from '@nestjs/common';
import { VideoCreationDTO, VideoUpdateDTO } from '../dtos';
import { Cache } from 'cache-manager';
import fs from 'fs';
import { ObjectId } from 'src/core/base/tools';

@Injectable()
export class VideoService {
  constructor(
    @InjectModel(Video.name) private readonly videoModel: Model<VideoDocument>,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  public async create(video: VideoCreationDTO): Promise<Video> {
    try {
      const newVideo = new this.videoModel({
        _id: ObjectId(),
        ...video,
        course: video.course ? ObjectId(video.course) : null,
      });
      await newVideo.save();
      return newVideo;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async findAll(): Promise<Video[]> {
    try {
      return await this.videoModel.find({});
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async findById(id: string): Promise<Video> {
    try {
      return await this.videoModel.findById(ObjectId(id));
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async update(id: string, update: VideoUpdateDTO): Promise<Video> {
    try {
      return await this.videoModel.findOneAndUpdate(
        { _id: ObjectId(id) },
        { ...update },
        {
          new: true,
        },
      );
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async remove(id: string): Promise<Video> {
    try {
      return await this.videoModel.findOneAndDelete({ _id: ObjectId(id) });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getVideoPathById(id: string): Promise<string> {
    try {
      const cachedPath = await this.cacheManager.get(`video-${id}`);
      if (cachedPath && cachedPath !== '') {
        return `${cachedPath}`;
      }
      const video = await this.videoModel.findById(ObjectId(id));
      if (!video) {
        throw new NotFoundException(`Video with id ${id} is not existed`);
      }
      const url = video.videoUrl;
      if (!url || url === '') {
        throw new NotFoundException(
          `Video with id ${id} does not have a valid url`,
        );
      }
      await this.cacheManager.set(`video-${id}`, url, { ttl: 30 * 60 });
      return url;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  getVideoSizeByPath(path: string): number | undefined {
    try {
      return fs.statSync(path).size;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  getVideoStream(path: string, start: number, end: number) {
    try {
      return fs.createReadStream(path, { start, end });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
