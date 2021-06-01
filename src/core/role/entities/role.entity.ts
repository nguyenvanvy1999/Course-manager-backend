import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../base/entities';
import { User } from '../../user/entities';
import { IRole } from '../interfaces';

@Entity('Roles')
export class Role extends BaseEntity implements IRole {
  @Column({ type: 'varchar', length: 200 })
  name: string;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
