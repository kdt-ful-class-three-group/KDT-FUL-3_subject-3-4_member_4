import fs from "fs";
import http from "http";
import qs from "querystring";
import { writeFile } from "./public/writeFile.js";

let body = "";
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
            request.on("data", function (data) {
                body += data;
            });
            request.on("end", function () {
                writeFile();
            });
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

// function writeFile() {
//     const dataJsonQsStr = qs.parse(body);
//     const dataJsonQs = JSON.stringify(dataJsonQsStr);
//     const dataJsonQsParse = JSON.parse(dataJsonQs);
//     let arrJson = readFile();
//     arrJson.push(dataJsonQsParse);
//     fs.writeFile("data.json", JSON.stringify(arrJson, null, 2), () => {
//         console.log("성공");
//     });
//     console.log(arrJson);
// }

// function readFile() {
//     let arrJson = [];
//     const dataJsonFile = fs.readFileSync("data.json").toString();
//     if (dataJsonFile !== "") {
//         const dataObj = JSON.parse(dataJsonFile);
//         dataObj.forEach((element) => {
//             arrJson.push(element);
//         });
//     }
//     return arrJson;
// }
