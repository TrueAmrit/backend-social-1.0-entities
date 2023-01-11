import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class EntityBase {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  creation: Date;

  @UpdateDateColumn()
  modified: Date;
}
