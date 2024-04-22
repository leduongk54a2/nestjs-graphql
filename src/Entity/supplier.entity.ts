import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'suppliers' })
export class Supplier {
  @PrimaryColumn({
    name: 'supplierId',
    type: 'bigint',
    unsigned: true,
  })
  supplierId: number;

  @Column({ length: 255, name: 'supplierName' })
  supplierName: string;

  @Column({ length: 255, name: 'textDescription' })
  textDescription: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
