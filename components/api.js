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
                divDom.innerHTML = `
               <div>
                <p id="dataId">${data[i].id}</p>
                <input id="inputName" type="text" name="inputName" placeholder="${data[i].inputName}">
                <p id="dataTime"> ${data[i].timestamp}</p>
                <button class="soveBtn" >저장</button>
                <button class="delBtn">삭제</button>
              </div>
              `;
                const saveButton = divDom.querySelector(".soveBtn");
                saveButton.addEventListener("click", () => updateData(i));
                // }
            });
        }).catch((error) => {
            console.log("에러" + error);
        });
    });

function updateData(index) {
    console.log(index);
    const id = document.getElementById("dataId").innerText;
    const inputName = document.getElementById("inputName").value;
    const timestamp = document.getElementById("dataTime").innerText;

    const updatedInfo = {
        id: id,
        inputName: inputName,
        timestamp: timestamp,
    };
    console.log(updatedInfo); // 수정해서 jsons에 넣을 객체

    fetch(`http://localhost:8000/data.json`)
        .then((res) => res.json())
        .then((data) => {
            location.href = `/`;
            const index = data.findIndex((item) => item.id == id);
            if (index !== -1) {
                data[index] = updatedInfo; // 해당 index에 바꿔치기
                fetch(`http://localhost:8000/update`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data, null, 2),
                }).catch((error) => {
                    console.log("에러" + error);
                });
            }
        })
        .catch((error) => {
            console.log("에러" + error);
        });
}
