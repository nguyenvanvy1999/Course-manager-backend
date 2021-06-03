import { applyDecorators } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsMongoId, IsNotEmpty } from 'class-validator';

export const CheckMongoId = (require: boolean) => {
  const _ = [IsMongoId(), Type(() => IsMongoId)];
  require && _.push(IsNotEmpty());
  return applyDecorators(..._);
};
