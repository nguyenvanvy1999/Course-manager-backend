import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Role } from '../../role/entities';
import { IAdmin, IMod, ISupporter, IUser } from '../interfaces';
import { BaseEntity } from 'src/core/base/entities';
import { Account } from 'src/core/account/entities';

@Entity('Users')
export class User extends BaseEntity implements IUser {
  @Column({ type: 'varchar', unique: true })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email is not valid' })
  email: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  fullName: string;

  @OneToOne(() => Account, (account) => account.user)
  @JoinColumn()
  account: Account;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable()
  roles: Role[];

  @OneToOne('Admin', 'user')
  @JoinColumn()
  admin?: IAdmin;

  @OneToOne('Supporter', 'user')
  @JoinColumn()
  supporter?: ISupporter;

  @OneToOne('Mod', 'user')
  @JoinColumn()
  mod?: IMod;
}
