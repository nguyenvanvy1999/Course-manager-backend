import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subtitle, SubtitleDocument } from '../models';

@Injectable()
export class SubtitleService {
  constructor(
    @InjectModel(Subtitle.name)
    private readonly subtitleModel: Model<SubtitleDocument>,
  ) {}
}
