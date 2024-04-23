import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../../Entity/product.entity';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Injectable()
@Resolver(() => Product)
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  @Query(() => [Product])
  async products(): Promise<Product[]> {
    return this.productRepository.find({ relations: ['category'] });
  }
  @Query(() => Product)
  async product(
    @Args('productId', { type: () => Number }) productId: number,
  ): Promise<Product> {
    return this.productRepository.findOne({
      where: { productId },
      relations: ['category'],
    });
  }
}
