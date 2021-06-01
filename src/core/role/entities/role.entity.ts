import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../base/entities';
import { User } from '../../user/entities';

@Entity('Roles')
export class Role extends BaseEntity {
  @Column({ type: 'varchar', length: 200 })
  name: string;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
