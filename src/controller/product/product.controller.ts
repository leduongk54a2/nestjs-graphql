import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../../Services/product/product.service';
import { Product } from '../../Entity/product.entity';

@Controller('product')
export class ProductController {
  private service: ProductService;

  constructor(service: ProductService) {
    this.service = service;
  }

  @Get('/')
  findAll(): Promise<Product[]> {
    return this.service.findAll();
  }
}
