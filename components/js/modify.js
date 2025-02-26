function modify() {
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
                    //*  수정버튼
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
}

export { modify };
