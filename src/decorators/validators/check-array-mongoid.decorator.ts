import { applyDecorators } from '@nestjs/common';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsMongoId,
} from 'class-validator';

export const CheckArrayMongoId = (minSize?: number, maxSize?: number) => {
  const _ = [IsArray(), Type(() => IsMongoId)];
  minSize && _.push(ArrayMinSize(minSize));
  maxSize && _.push(ArrayMaxSize(maxSize));
  return applyDecorators(..._);
};
