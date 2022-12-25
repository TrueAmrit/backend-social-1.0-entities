import { Column, Entity } from 'typeorm';
import { EntityBase } from './entityBase';

@Entity()
export class User extends EntityBase {
  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  password: string;
}
