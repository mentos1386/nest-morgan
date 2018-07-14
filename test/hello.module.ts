import { MorganModule } from '../lib';
import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';

@Module({
  imports: [
    MorganModule.forRoot(),
  ],
  controllers: [
    HelloController
  ]
})
export class HelloModule {
}