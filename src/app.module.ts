import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './module/category/category.module';

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
    }),
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
