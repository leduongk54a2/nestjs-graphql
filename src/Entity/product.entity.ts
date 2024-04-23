import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { Supplier } from './supplier.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity({ name: 'products' })
@ObjectType()
export class Product {
  @Field()
  @PrimaryGeneratedColumn({
    name: 'productId',
    type: 'bigint',
    unsigned: true,
  })
  productId: number;

  @Field()
  @Column({ length: 255, name: 'productName' })
  productName: string;

  @Field()
  @Column({ length: 255, name: 'imgUrl' })
  imgUrl: string;

  @Field()
  @Column({ length: 255, name: 'description' })
  description: string;

  @Field()
  @Column({ type: 'double', name: 'discount' })
  discount: number;

  @Field()
  @Column({ type: 'int', name: 'quantity' })
  quantity: number;

  @Field()
  @Column({ type: 'double', name: 'price' })
  price: number;

  @Field()
  @Column({ default: false, type: 'tinyint', name: 'display' })
  display: boolean;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: 'categoryId' })
  @Field(() => Category)
  category: Category;

  @ManyToOne(() => Supplier, (supplier) => supplier.products)
  @JoinColumn({ name: 'supplierId' })
  supplier: Supplier;
}
