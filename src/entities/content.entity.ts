import { Column, Entity, ManyToOne } from 'typeorm';
import { EntityBase } from './entityBase';
import { ContentType } from '../../../backend-social-1.0-dtos/src/enums/contentType.enum';
import { userInfo } from 'os';
import { UserDto } from '../../../backend-social-1.0-dtos/src/dtos/user.dto';
import { User } from './user.entity';

@Entity()
export class Content extends EntityBase {
  @Column({
    nullable: false,
  })
  tittle: string;

  @Column({
    nullable: false,
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
}
