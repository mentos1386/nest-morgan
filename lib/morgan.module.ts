import { DynamicModule, Global, Module } from "@nestjs/common";
import { morganProviders } from "./morgan.providers";

@Global()
@Module({
  providers: [...morganProviders],
  exports: [...morganProviders],
})
export class MorganModule {
  static forRoot(): DynamicModule {
    return {
      module: MorganModule,
    };
  }
}
