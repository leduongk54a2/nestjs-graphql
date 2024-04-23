import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Product } from './product.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity({ name: 'category' })
@ObjectType()
export class Category {
  @PrimaryColumn({
    name: 'categoryId',
    type: 'bigint',
    unsigned: true,
  })
  @Field()
  categoryId: number;

  @Field()
  @Column({ length: 255, name: 'categoryName' })
  categoryName: string;

  @Field()
  @Column({ length: 255, name: 'textDescription' })
  textDescription: string;

  @Field()
  @Column({ default: true, type: 'tinyint', name: 'visible' })
  visible: boolean;

  @Field(() => [Product])
  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
