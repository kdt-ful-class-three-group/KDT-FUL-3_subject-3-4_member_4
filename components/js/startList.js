let divDom = document.getElementById("tableList");
function startList(data) {
    for (let index = 0; index < data.length; index++) {
        divDom.innerHTML += ` 
        <div>
          <p>${data[index].id}</p>
          <p> ${data[index].inputName}</p>
          <p> ${data[index].timestamp}</p>
          <button class="detBtn" data-inedx="${index + 1}">수정</button>
          <button class="delBtn">삭제</button>
        </div>
    `;
    }
}

export { startList, divDom };
