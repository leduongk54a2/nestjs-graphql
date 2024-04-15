import { Controller, Get } from '@nestjs/common';
import { Category } from '../../Entity/category.entity';
import { CategoryService } from '../../Services/category/category.service';

@Controller('category')
export class CategoryController {
  private service: CategoryService;

  constructor(service: CategoryService) {
    this.service = service;
  }

  @Get()
  findAll(): Promise<Category[]> {
    return this.service.findAll();
  }
}
