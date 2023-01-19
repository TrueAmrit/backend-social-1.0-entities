import { Entity, ManyToOne } from 'typeorm';
import { Column } from 'typeorm/decorator/columns/Column';
import { ContentDto } from '../../../backend-social-1.0-dtos/src/dtos/content.dto';
import { UserDto } from '../../../backend-social-1.0-dtos/src/dtos/user.dto';
import { Content } from './content.entity';
import { EntityBase } from './entityBase';
import { User } from './user.entity';

@Entity()
export class Reaction extends EntityBase {
  @Column()
  type: string;

  @Column()
  comment: string;

  @Column()
  emojiUrl: string;

  @ManyToOne(() => User, (user) => user.reactions)
  user: UserDto;

  @ManyToOne(() => Content, (content) => content.reactions)
  content: ContentDto;
}
