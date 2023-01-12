import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { EntityBase } from './entityBase';
import { ContentType } from '../../../backend-social-1.0-dtos/src/enums/contentType.enum';
import { UserDto } from '../../../backend-social-1.0-dtos/src/dtos/user.dto';
import { GroupDto } from '../../../backend-social-1.0-dtos/src/dtos/group.dto';
import { User } from './user.entity';
import { Option } from './option.entity';
import { OptionDto } from '../../../backend-social-1.0-dtos/src/dtos/option.dto';
import { Group } from './group.entity';

@Entity()
export class Content extends EntityBase {
  @Column({
    nullable: false,
  })
  tittle: string;

  @Column({
    nullable: false,
    type: 'enum',
    enum: ContentType,
    default: ContentType.POST,
  })
  type: ContentType;

  @Column()
  body: string;

  @Column()
  imageUrls: string;

  @Column()
  videoUrls: string;

  @ManyToOne(() => User, (user) => user.contents)
  user: UserDto;

  @OneToMany(() => Option, (option) => option.content)
  options: OptionDto[];

  @ManyToOne(() => Group, (group) => group.contents)
  group: GroupDto;
}
