import fs from "fs";
import http from "http";

const server = http.createServer(function (request, response) {
    if (request.method === "GET") {
        if (request.url === "/") {
            const mainPage = fs.readFileSync("index.html");
            response.writeHead(200, { "content-type": "text/html" });
            response.end(mainPage);
        } else {
            // 서버 요청 예외처리
            const mainPage = fs.readFileSync("err.html");
            response.writeHead(200, { "content-type": "text/html" });
            response.end(mainPage);
        }
    }
    if (request.method === "POST") {
        if (request.url === "/") {
            const mainPage = fs.readFileSync("index.html");
            response.writeHead(200, { "content-type": "text/html" });
            response.end(mainPage);
        } else {
            // 요청 예외처리
            const mainPage = fs.readFileSync("err.html");
            response.writeHead(200, { "content-type": "text/html" });
            response.end(mainPage);
        }
    }
});

server.listen(8000, () => {
    console.log("8000번 서버 실행 http://localhost:8000");
});
