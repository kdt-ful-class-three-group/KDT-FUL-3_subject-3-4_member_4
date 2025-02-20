import fs from "fs";
import http from "http";

const server = http.createServer(function (request, response) {
    const url = request.url;
    if (request.method === "GET") {
        if (url === "/") {
            const mainPage = fs.readFileSync("index.html");
            response.writeHead(200, { "content-type": "text/html" });
            response.end(mainPage);
        } else {
            console.log(url);
            // 서버 요청 예외처리
            const mainPage = fs.readFileSync("geterr.html");
            response.writeHead(200, { "content-type": "text/html" });
            response.end(mainPage);
        }
    }
    if (request.method === "POST") {
        if (url === "/") {
            const mainPage = fs.readFileSync("index.html");
            response.writeHead(200, { "content-type": "text/html" });
            response.end(mainPage);
        } else if (url === "/notice") {
            console.log(url);
            const mainPage = fs.readFileSync("notice.html");
            response.writeHead(200, { "content-type": "text/html" });
            response.end(mainPage);
        } else {
            // 요청 예외처리
            const mainPage = fs.readFileSync("posterr.html");
            response.writeHead(200, { "content-type": "text/html" });
            response.end(mainPage);
        }
    }
});

server.listen(8000, () => {
    console.log("8000번 서버 실행 http://localhost:8000");
});
