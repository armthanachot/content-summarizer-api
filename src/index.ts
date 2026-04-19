import { Elysia } from "elysia";
import S3Router from "./s3/router";

const app = new Elysia({
  prefix: "/api/v1",
}).get("/", () => "Hello Elysia").use(S3Router).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
