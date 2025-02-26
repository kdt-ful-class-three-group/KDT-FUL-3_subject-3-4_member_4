let divDom = document.getElementById("tableList");
// 메인 테이블 뿌려주기
let xhr = new XMLHttpRequest();
xhr.open("GET", "data.json", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let dataList = JSON.parse(xhr.responseText);
        for (let index = 0; index < dataList.length; index++) {
            divDom.innerHTML += ` 
            <div>
              <p>${dataList[index].id}</p>
              <p> ${dataList[index].inputName}</p>
              <p> ${dataList[index].timestamp}</p>
              <button class="detBtn" data-inedx="${index + 1}">수정</button>
              <button class="delBtn">삭제</button>
            </div>
        `;
        }
    }
};
xhr.send();
