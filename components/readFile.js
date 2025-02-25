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
//* 서버 껐다 켰을 때 json데이터가 비어있으면 패스 / 파일 저장 해서 서버 껐다 켰을 때 데이터 유지 시키는 로직
export { readFile };
