import qs from "querystring";
import fs from "fs";
import { readFile } from "./readFile.js";
function writeFile(body) {
    const dataJsonQsStr = qs.parse(body);
    console.log(dataJsonQsStr);
    const dataJsonQs = JSON.stringify(dataJsonQsStr);
    console.log(dataJsonQs);
    const dataJsonQsParse = JSON.parse(dataJsonQs);
    console.log(dataJsonQsParse);
    let arrJson = readFile();
    // let arrJson = [];
    arrJson.push(dataJsonQsParse);
    fs.writeFile("data.json", JSON.stringify(arrJson, null, 2), () => {
        console.log("성공");
    });
    console.log(arrJson);
}
export { writeFile };
