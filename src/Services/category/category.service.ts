import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../../Entity/category.entity';
import { Repository } from 'typeorm';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Injectable()
@Resolver(() => Category)
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  @Query(() => [Category])
  categories(): Promise<Category[]> {
    return this.categoryRepository.find({ relations: ['products'] });
  }

  @Mutation(() => Category)
  async upsertCategory(
    @Args('categoryId', { type: () => Int, nullable: true }) categoryId: number,
    @Args('categoryName') categoryName: string,
    @Args('textDescription', { nullable: true }) textDescription?: string,
    @Args('visible', { nullable: true }) visible?: boolean,
  ) {
    const category: Category = new Category(
      categoryId,
      categoryName,
      textDescription,
      visible,
    );
    const existingEntity = await this.categoryRepository.findOne({
      where: { categoryId },
    });

    if (existingEntity) {
      await this.categoryRepository.update(
        { categoryId: category.categoryId },
        category,
      );
    } else {
      await this.categoryRepository.save(category);
    }

    return category;
  }
}
