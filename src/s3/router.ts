import Elysia from "elysia";
import { ThemeStructureRequest, UploadFileRequest } from "./model/req";
import S3Service from "./service";

const app = new Elysia({
    prefix: "/s3",
}).post("/upload-theme", ({ body }) => S3Service.uploadTheme(body.file, body.fileName), {
    body: UploadFileRequest,
})
.post("/upload-json-theme", ({ body }) => S3Service.uploadJSONTheme(body), {
    body: ThemeStructureRequest,
})

export default app