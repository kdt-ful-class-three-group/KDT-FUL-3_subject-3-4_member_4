// let arrJson = [];

console.log("연결완");

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
// function fun(index) {
//   index 0~json~

// }
// function dataDelete() {
// 상세페이지, 삭제
fetch("/data.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let deleteBtn = document.querySelectorAll(".delBtn");
        let detailBtn = document.querySelectorAll(".detBtn");
        data.forEach((element, i) => {
            deleteBtn[i].addEventListener("click", () => {
                location.href = `/deletePage/${element.id}`;
            });
            detailBtn[i].addEventListener("click", () => {
                // location.href = `/detailPage/${element.id}`;
                for (let index = 0; index < data.length; index++) {
                    divDom.innerHTML = `
               <div>
                <p id="dataId">${data[index].id}</p>
                <input id="inputName" type="text" name="inputName" placeholder="${
                    data[index].inputName
                }">
                <p id="dataTime"> ${data[index].timestamp}</p>
                <button class="detBtn" data-inedx="${
                    index + 1
                }" id="updateData">저장</button>
                <button class="delBtn">삭제</button>
              </div>
              `;
                }
                updateData();
            });
            // console.log(element);
        });
    });

async function updateData() {
    let updateBtn = document.getElementById("updateData");
    updateBtn.addEventListener("cilck", () => {});
    const id = document.getElementById("dataId").innerText;
    const name = document.getElementById("inputName").value;
    const time = document.getElementById("dataTime").innerText;

    const updatedInfo = {
        id: id,
        name: name,
        time: time,
    };
    console.log(updatedInfo);
    // try {
    //     const response = await fetch(`http://localhost:3000/data/${id}`, {
    //         method: "PUT",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(updatedInfo),
    //     });

    //     if (!response.ok) {
    //         throw new Error("수정 실패");
    //     }

    //     const result = await response.json();
    //     document.getElementById("result").textContent = JSON.stringify(
    //         result,
    //         null,
    //         2
    //     );
    // } catch (error) {
    //     console.error("오류:", error);
    //     alert("수정 중 오류가 발생했습니다.");
    // }
}
