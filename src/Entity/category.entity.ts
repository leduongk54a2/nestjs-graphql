import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'category' })
export class Category {
  @PrimaryColumn({
    name: 'categoryId',
    type: 'bigint',
    unsigned: true,
  })
  categoryId: number;

  @Column({ length: 255, name: 'categoryName' })
  categoryName: string;

  @Column({ length: 255, name: 'textDescription' })
  textDescription: string;

  @Column({ default: true, type: 'tinyint', name: 'visible' })
  visible: boolean;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
