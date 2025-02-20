import qs from "querystring";
import fs from "fs";
import { readFile } from "./readFile.js";
function writeFile(body) {
    const dataJsonQsStr = qs.parse(body);
    const dataJsonQs = JSON.stringify(dataJsonQsStr);
    const dataJsonQsParse = JSON.parse(dataJsonQs);
    let arrJson = readFile();
    arrJson.push(dataJsonQsParse);
    fs.writeFile("data.json", JSON.stringify(arrJson, null, 2), () => {
        console.log("성공");
    });
    console.log(arrJson);
}
export { writeFile };
