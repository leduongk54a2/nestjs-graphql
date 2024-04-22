import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CategoryModule } from './module/category.module';
import { SupplierModule } from './module/supplier.module';
import { ProductModule } from './module/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: 'dktshop',
      entities: [],
      host: 'localhost',
      password: '',
      port: 3306,
      synchronize: true,
      type: 'mysql',
      username: 'root',
      autoLoadEntities: true,
    }),
    CategoryModule,
    ProductModule,
    SupplierModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
