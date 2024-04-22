import { Controller, Get } from '@nestjs/common';
import { SupplierService } from '../../Services/supplier/supplier.service';
import { Supplier } from '../../Entity/supplier.entity';

@Controller('supplier')
export class SupplierController {
  private service: SupplierService;

  constructor(service: SupplierService) {
    this.service = service;
  }

  @Get()
  findAll(): Promise<Supplier[]> {
    return this.service.findAll();
  }
}
