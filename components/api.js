// let arrJson = [];

console.log("연결완");

let xhr = new XMLHttpRequest();
xhr.open("GET", "data.json", true);
xhr.onreadystatechange = function () {
    let divDom = document.getElementById("tableList");
    if (xhr.readyState === 4 && xhr.status === 200) {
        let dataList = JSON.parse(xhr.responseText);
        for (let index = 0; index < dataList.length; index++) {
            divDom.innerHTML += ` 
            <div>
              <p>${dataList[index].id}</p>
              <p> ${dataList[index].inputName}</p>
              <p> ${dataList[index].timestamp}</p>
              <button class="detBtn">수정</button>
              <button class="delBtn">삭제</button>
            </div>
        `;
        }
    }
};
xhr.send();
// function fun(index) {
//   index 0~json~

// }
// function dataDelete() {
fetch("/data.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let deleteBtn = document.querySelectorAll(".delBtn");
        let detileBtn = document.querySelectorAll(".detBtn");
        // let deleteBtn = document.getElementById("delBtn");
        data.forEach((element, i) => {
            deleteBtn[i].addEventListener("click", () => {
                location.href = `/deletePage/${element.id}`;
            });
            detileBtn[i].addEventListener("click", () => {
              location.href = `/deletePage/${element.id}`;
          });
            console.log(element);
        });
    });
//     console.log("실행");
// }
