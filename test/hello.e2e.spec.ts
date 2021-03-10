import * as request from "supertest";
import { Test } from "@nestjs/testing";
import { HelloModule } from "./hello.module";
import { INestApplication } from "@nestjs/common";
import { MORGAN_PROVIDER } from "../lib";
import * as express from "express";

describe("Hello", () => {
  let app: INestApplication;

  let mockMorganData: {
    req: express.Request;
    res: express.Response;
    next: any;
  } | null;
  const mockMorgan = () => (req: any, res: any, next: any) => {
    mockMorganData = { req, res, next };
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [HelloModule],
    })
      .overrideProvider(MORGAN_PROVIDER)
      .useValue(mockMorgan)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  beforeEach(() => (mockMorganData = null));

  it(`/GET common/works`, async () => {
    await request(app.getHttpServer()).get("/common/works").expect(200);

    expect(mockMorganData).not.toBeNull();
  });

  it(`/GET common/error`, async () => {
    await request(app.getHttpServer()).get("/common/error").expect(500);

    expect(mockMorganData).not.toBeNull();
  });

  it(`/GET combined/works`, async () => {
    await request(app.getHttpServer()).get("/combined/works").expect(200);

    expect(mockMorganData).not.toBeNull();
  });

  it(`/GET combined/error`, async () => {
    await request(app.getHttpServer()).get("/combined/error").expect(500);

    expect(mockMorganData).not.toBeNull();
  });

  afterAll(async () => {
    await app.close();
  });
});
