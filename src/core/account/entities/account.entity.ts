import { BaseEntity } from 'src/core/base/entities';
import { User } from 'src/core/user/entities';
import { Column, Entity, OneToOne } from 'typeorm';
import { IAccount } from '../interfaces';

@Entity('Accounts')
export class Account extends BaseEntity implements IAccount {
  @Column({ type: 'varchar', length: 20, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 300 })
  password: string;

  @OneToOne(() => User, (user) => user.account)
  user: User;
}
