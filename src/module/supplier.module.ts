import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier } from '../Entity/supplier.entity';
import { SupplierService } from '../Services/supplier/supplier.service';
import { SupplierController } from '../controller/supplier/supplier.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Supplier])],
  providers: [SupplierService],
  controllers: [SupplierController],
})
export class SupplierModule {}
