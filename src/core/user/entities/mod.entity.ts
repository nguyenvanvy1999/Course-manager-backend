import { IMod, IUser } from '../interfaces';
import { Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Mods')
export class Mod implements IMod {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne('User', 'mod')
  user: IUser;
}
