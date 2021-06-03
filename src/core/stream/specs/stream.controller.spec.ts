import { Test, TestingModule } from '@nestjs/testing';
import { StreamController } from '../controllers';
import { VideoService } from '../../video/services';

describe('StreamController', () => {
  let controller: StreamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StreamController],
      providers: [VideoService],
    }).compile();

    controller = module.get<StreamController>(StreamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
