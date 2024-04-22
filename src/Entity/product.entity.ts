import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { Supplier } from './supplier.entity';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn({
    name: 'productId',
    type: 'bigint',
    unsigned: true,
  })
  productId: number;

  @Column({ length: 255, name: 'productName' })
  productName: string;

  @Column({ length: 255, name: 'imgUrl' })
  imgUrl: string;

  @Column({ length: 255, name: 'description' })
  description: string;

  @Column({ type: 'double', name: 'discount' })
  discount: number;

  @Column({ type: 'int', name: 'quantity' })
  quantity: number;

  @Column({ type: 'double', name: 'price' })
  price: number;

  @Column({ default: false, type: 'tinyint', name: 'display' })
  display: boolean;

  @ManyToOne(() => Category, (category) => category.products) // Many-to-one relationship
  @JoinColumn({ name: 'categoryId' }) // Specifies the column name in the database
  category: Category; // Author of the post

  @ManyToOne(() => Supplier, (supplier) => supplier.products) // Many-to-one relationship
  @JoinColumn({ name: 'supplierId' }) // Specifies the column name in the database
  supplier: Supplier; // Author of the post
}
