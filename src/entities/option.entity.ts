import { Entity, ManyToOne } from 'typeorm';
import { Column } from 'typeorm/decorator/columns/Column';
import { ContentDto } from '../../../backend-social-1.0-dtos/src/dtos/content.dto';
import { Content } from './content.entity';
import { EntityBase } from './entityBase';

@Entity()
export class Option extends EntityBase {
  @Column()
  tittle: string;

  @Column()
  body: string;

  @ManyToOne(() => Content, (content) => content.options,{
    cascade: true,
  })
  content: ContentDto;
}
