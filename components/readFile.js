import fs from "fs";
function readFile() {
    let arrJson = [];
    const dataJsonFile = fs.readFileSync("data.json").toString();
    if (dataJsonFile !== "") {
        const dataObj = JSON.parse(dataJsonFile);
        dataObj.forEach((element) => {
            arrJson.push(element);
        });
    }
    return arrJson;
}

export { readFile };
