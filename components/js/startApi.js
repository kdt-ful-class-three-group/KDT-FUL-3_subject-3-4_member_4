import { modify } from "./modify.js";
import { startList } from "./startList.js";

// 메인 테이블 뿌려주기
function startApi() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let dataList = JSON.parse(xhr.responseText);
            startList(dataList); //* 처음 게시판 뿌려줌
            modify(dataList); //* 리스트 수정 dataList = data.json
        }
    };
    xhr.send();
}

export { startApi };
