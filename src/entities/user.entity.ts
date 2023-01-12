import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { Content } from './content.entity';
import { EntityBase } from './entityBase';
import { ContentDto } from '../../../backend-social-1.0-dtos/src/dtos/content.dto';
import { Group } from './group.entity';
import { GroupDto } from '../../../backend-social-1.0-dtos/src/dtos/group.dto';

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

  @OneToMany(() => Content, (content) => content.user)
  contents: ContentDto[];

  @ManyToMany(() => Group, (group) => group.users)
  groups: GroupDto[];
}
