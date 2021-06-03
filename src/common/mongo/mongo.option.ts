import { IMongoOption } from './mongo.option.interface';

export const mongoOption: IMongoOption = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ignoreUndefined: true,
  useFindAndModify: false,
};
