import fs from "fs";
import http from "http";
import qs from "querystring";
import path from "path";
import { writeFile } from "./components/writeFile.js";
import { readFile } from "./components/readFile.js";

const server = http.createServer(function (request, response) {
    const url = request.url;
    console.log(url);
    if (request.method === "GET") {
        if (url === "/") {
            const mainPage = fs.readFileSync("index.html");
            response.writeHead(200, { "content-type": "text/html" });
            response.end(mainPage);
        } else if (url === "/components/api.js") {
            console.log(url);
            const mainPage = fs.readFileSync("components/api.js");
            response.writeHead(200, {
                "Content-Type": "application/javascript",                 
            });
            response.end(mainPage);
        } else if (url === "/data.json") {
            const mainPage = fs.readFileSync("data.json");
            response.writeHead(
                200,
                { "content-type": "application/json" },
                () => {
                    console.log("성공임둥");
                }
            );
            response.end(mainPage);
        } else if (url === "/public/css/style.css") {
            console.log(url);
            const mainPage = fs.readFileSync("public/css/style.css");
            response.writeHead(200, { "content-type": "text/css" });
            response.end(mainPage);
        } else if (url.startsWith("/deletePage")) {
            // delete page
            // console.log(request.params.id);
            const deleteNum = num(url);
            deleteJsonNum(deleteNum);
            // const num = url.
            response.writeHead(302, { location: "/" });
            response.end();
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
        } else if (url.endsWith(".js")) {
            const mainPage = fs.readFileSync(`${url}`);
            response.writeHead(200, { "content-type": "text/javascript" });
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
function num(url) {
    const split = url.split("/");
    // console.log(split[2]);
    return split[2];
}

function deleteJsonNum(deleteNum) {
    console.log(deleteNum);
    const readFileArr = readFile();
    const dataFilter = readFileArr.filter((data) => data.id != deleteNum);
    console.log(dataFilter);
    const reJsonData = JSON.stringify(dataFilter);
    console.log(reJsonData);
    fs.writeFileSync("data.json", reJsonData);
}
