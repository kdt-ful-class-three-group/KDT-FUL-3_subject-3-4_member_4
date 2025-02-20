import fs from "fs";
import http from "http";
import qs from "querystring";
import path from "path";
import { writeFile } from "./public/writeFile.js";

const server = http.createServer(function (request, response) {
    const url = request.url;
    console.log(url);
    if (request.method === "GET") {
        if (url === "/") {
            const mainPage = fs.readFileSync("index.html");
            response.writeHead(200, { "content-type": "text/html" });
            response.end(mainPage);
        } else {
            console.log(url);
            // 서버 요청 예외처리
            const mainPage = fs.readFileSync("errPages/geterr.html");
            response.writeHead(200, { "content-type": "text/html" });
            response.end(mainPage);
        }
    }
    if (request.method === "POST") {
        let body = "";
        if (url === "/") {
            const mainPage = fs.readFileSync("index.html");
            response.writeHead(200, { "content-type": "text/html" });
            response.end(mainPage);
        } else if (url === "/notice") {
            request.on("data", function (data) {
                body += data;
            });
            request.on("end", function () {
                writeFile(body);
            });
            console.log(url);
            const mainPage = fs.readFileSync("pages/notice.html");
            response.writeHead(200, { "content-type": "text/html" });
            response.end(mainPage);
        } else {
            // 요청 예외처리
            const mainPage = fs.readFileSync("errPages/posterr.html");
            response.writeHead(200, { "content-type": "text/html" });
            response.end(mainPage);
        }
    }
});

server.listen(8000, () => {
    console.log("8000번 서버 실행 http://localhost:8000");
});
