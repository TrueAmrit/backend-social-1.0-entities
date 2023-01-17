import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { EntityBase } from './entityBase';
import { GroupType } from '../../../backend-social-1.0-dtos/src/enums/groupType.enum';
import { Content } from './content.entity';
import { ContentDto } from '../../../backend-social-1.0-dtos/src/dtos/content.dto';
import { User } from './user.entity';
import { UserDto } from '../../../backend-social-1.0-dtos/src/dtos/user.dto';

@Entity()
export class Group extends EntityBase {
  @Column()
  tittle: string;

  @Column({
    nullable: false,
    type: 'enum',
    enum: GroupType,
    default: GroupType.PUBLIC,
  })
  type: string;

  @OneToMany(() => Content, (content) => content.group)
  contents: ContentDto[];

  @ManyToMany(() => User, (user) => user.groups)
  users: UserDto[];
}
