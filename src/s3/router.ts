import Elysia from "elysia";
import { UploadFileRequest } from "./model/req";
import S3Service from "./service";

const app = new Elysia({
    prefix: "/s3",
}).post("/upload-theme", ({ body }) => S3Service.uploadTheme(body.file, body.fileName), {
    body: UploadFileRequest,
})


export default app