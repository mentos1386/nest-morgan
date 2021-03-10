import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { MorganInterceptor } from "../lib";

@Controller("")
export class HelloController {
  @Get("common/works")
  @UseInterceptors(MorganInterceptor("common"))
  works_common() {
    return "Works";
  }

  @Get("common/error")
  @UseInterceptors(MorganInterceptor("common"))
  error_common() {
    throw new Error("Something bad happened");
  }

  @Get("combined/works")
  @UseInterceptors(MorganInterceptor("combined"))
  works_combined() {
    return "Works";
  }

  @Get("combined/error")
  @UseInterceptors(MorganInterceptor("combined"))
  error_combined() {
    throw new Error("Something bad happened");
  }
}
