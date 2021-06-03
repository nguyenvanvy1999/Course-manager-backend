import { Test, TestingModule } from '@nestjs/testing';
import { SubtitleService } from '../services';

describe('SubtitlesService', () => {
  let service: SubtitleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubtitleService],
    }).compile();

    service = module.get<SubtitleService>(SubtitleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
