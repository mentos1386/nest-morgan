import { mixin } from "@nestjs/common";
import * as morgan from "morgan";
import { AbstractMorganInterceptor } from "./morgan.interceptor.abstract";

// tslint:disable-next-line:function-name
export function MorganInterceptor(
  format: string | morgan.FormatFn,
  options: morgan.Options<any, any> = {}
) {
  return mixin(
    class extends AbstractMorganInterceptor {
      protected readonly options = options;
      protected readonly format = format;
    }
  );
}
