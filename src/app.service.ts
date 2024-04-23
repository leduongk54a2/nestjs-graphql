import { Injectable } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

@Injectable()
@Resolver()
export class AppService {
  @Query(() => String)
  getHello(): string {
    return 'Hello World!';
  }
}
