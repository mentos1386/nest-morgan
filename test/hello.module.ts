import { MorganModule } from "../lib";
import { Module } from "@nestjs/common";
import { HelloController } from "./hello.controller";

@Module({
  imports: [MorganModule],
  controllers: [HelloController],
})
export class HelloModule {}
