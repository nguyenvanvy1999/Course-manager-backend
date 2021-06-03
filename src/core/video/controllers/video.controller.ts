import { ApiInit, ControllerInit } from 'src/decorators';
import { VideoService } from '../services';
import { Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VideoCreationDTO, VideoUpdateDTO } from '../dtos';
import { Video } from '../models';

@ControllerInit('videos')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post()
  @ApiInit('Create new video', Video)
  public async create(
    @Body() createVideoDto: VideoCreationDTO,
  ): Promise<Video> {
    try {
      return await this.videoService.create(createVideoDto);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  @ApiInit('Find all video', [Video])
  public async findAll(): Promise<Video[]> {
    try {
      return this.videoService.findAll();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  @ApiInit('Find video by id', Video)
  public async findOne(@Param('id') id: string): Promise<Video> {
    try {
      return this.videoService.findById(id);
    } catch (error) {
      throw error;
    }
  }

  @Patch(':id')
  @ApiInit('Update video', Video)
  public async update(
    @Param('id') id: string,
    @Body() updateVideoDto: VideoUpdateDTO,
  ): Promise<Video> {
    try {
      return this.videoService.update(id, updateVideoDto);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  @ApiInit('Delete video', Video)
  public async remove(@Param('id') id: string): Promise<Video> {
    try {
      return this.videoService.remove(id);
    } catch (error) {
      throw error;
    }
  }
}
