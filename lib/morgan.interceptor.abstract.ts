import {
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
  CallHandler,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { Options, FormatFn, Morgan } from "morgan";
import { MORGAN_PROVIDER } from "./morgan.constants";

@Injectable()
export abstract class AbstractMorganInterceptor implements NestInterceptor {
  protected abstract readonly options: Options<any, any>;
  protected abstract readonly format: string | FormatFn;

  constructor(
    @Inject(MORGAN_PROVIDER) private morganInstance: Morgan<any, any>
  ) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<any> {
    const httpRequest = context.switchToHttp().getRequest();
    const httpResponse = context.switchToHttp().getResponse();

    // If is here just to satisfy TypeScript
    if (typeof this.format === "string") {
      this.morganInstance(this.format, this.options)(
        httpRequest,
        httpResponse,
        console.error
      );
    } else {
      this.morganInstance(this.format, this.options)(
        httpRequest,
        httpResponse,
        console.error
      );
    }

    return next.handle();
  }
}
