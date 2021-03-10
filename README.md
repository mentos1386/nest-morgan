<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="http://kamilmysliwiec.com/public/nest-logo.png#1" alt="Nest Logo" />   </a>
</p>

<p align="center">Morgan Module for Nest framework</p>

<p align="center">
<a href="https://www.npmjs.com/package/nest-morgan"><img src="https://img.shields.io/npm/v/nest-morgan.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/nest-morgan"><img src="https://img.shields.io/npm/l/nest-morgan.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/package/nest-morgan"><img src="https://img.shields.io/npm/dm/nest-morgan.svg" alt="NPM Downloads" /></a>
<a href="https://github.com/mentos1386/nest-morgan/actions/workflows/test.yaml"><img src="https://github.com/mentos1386/nest-morgan/actions/workflows/test.yaml/badge.svg?branch=master" alt="Github Actions - Test" /></a>
</p>

### Not activly maintained!

This module is not activly maintainer. Any PR's will be reviewd/merged/released. But i don't
plan to work on, or add any new functionality to this module.

## Description

This's a [Morgan](https://github.com/expressjs/morgan) module for [Nest](https://github.com/nestjs/nest).

## Installation

```bash
$ npm i --save nest-morgan morgan @types/morgan
```

### Versions

- **2.x** Is for Nest v7.x
  - Remove the need to use `MorganModule.forRoot()` [#17](https://github.com/mentos1386/nest-morgan/issues/17).
- **1.x** Is for Nest v6.x
- **0.x** Is for Nest v5.x

## Quick Start

### Include Module

> app.module.ts

```ts
@Module({
  imports: [MorganModule],
})
export class ApplicationModule {}
```

#### Global

If you want to set up interceptor as global, you have to follow Nest
instructions [here](https://docs.nestjs.com/interceptors). Something like
this:

> app.module.ts

```ts
import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganModule, MorganInterceptor } from "nest-morgan";

@Module({
  imports: [MorganModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class ApplicationModule {}
```

### Using Interceptor

> app.controller.ts

```ts
  @UseInterceptors(MorganInterceptor('combined'))
  @Get('/some/route')
  public async someRoute() {
    ...
  }
```
