import { AccountDTO } from '../dtos';
import { Account } from '../entities';
import { AccountResDTO } from '../dtos';

export function mapAccountToAccountDTO(account: Account): AccountDTO {
  const {
    createdAt,
    username,
    user: { email, roles },
  } = account;
  const userRoles = roles && roles.map((role) => role.name);
  return {
    username,
    email,
    createdAt: createdAt.toLocaleString(),
    roles: userRoles,
  };
}
