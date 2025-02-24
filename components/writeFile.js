import qs from "querystring";
import fs from "fs";
import { readFile } from "./readFile.js";

function writeFile(body) {
    const dataJsonQsStr = qs.parse(body);
    let arrJson = readFile();
    // 현재 시간 추가
    dataJsonQsStr.id = arrJson.length + 1;
    const now = new Date();
    dataJsonQsStr.timestamp = now.toISOString().split("T")[0]; // 연월일만

    console.log(arrJson.length);
    const dataJsonQs = JSON.stringify(dataJsonQsStr);
    const dataJsonQsParse = JSON.parse(dataJsonQs);

    arrJson.push(dataJsonQsParse);

    fs.writeFile("data.json", JSON.stringify(arrJson, null, 2), (err) => {
        if (err) {
            console.error("실패:", err);
        } else {
            console.log("성공:", arrJson);
        }
    });
}

export { writeFile };

// const deletedData = dataObj.filter(data => data.order != order)
// //* 가지고 온 데이터를 파일로 만들기 위해 Json문자열로 만든다.
// const dataJson = dataToJsonStringify(deletedData);
// //* Json문자열로 list.JSON파일을 만든다.
// fs.writeFileSync("list.JSON", dataJson);
