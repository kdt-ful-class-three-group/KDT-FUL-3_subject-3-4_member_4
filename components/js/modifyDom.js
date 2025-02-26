import { update } from "./update.js";
function modifyDom(i, divDom, data) {
    // event.preventDefault();
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
    saveButton.addEventListener("click", () => update(data));
}

export { modifyDom };
