/* eslint-disable @typescript-eslint/no-unused-vars */
import { AccountResDTO } from '../dtos';
import { Account } from '../entities';

export const mapAccountToAccountResDTO = (account: Account): AccountResDTO => {
  const { password, createdAt, createdBy, updatedAt, updatedBy, ...result } =
    account;
  return result;
};
