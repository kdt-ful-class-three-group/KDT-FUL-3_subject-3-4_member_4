import qs from "querystring";
import fs from "fs";
import { readFile } from "./readFile.js";

function writeFile(body) {
    const dataJsonQsStr = qs.parse(body);

    // 현재 시간 추가
    const now = new Date();
    dataJsonQsStr.timestamp = now.toISOString().split("T")[0]; // 연월일만 표출

    const dataJsonQs = JSON.stringify(dataJsonQsStr);
    const dataJsonQsParse = JSON.parse(dataJsonQs);

    let arrJson = readFile();
    arrJson.push(dataJsonQsParse);

    fs.writeFile("data.json", JSON.stringify(arrJson, null, 2));
}

export { writeFile };
