import { divDom } from "./startList.js";
import { modifyDom } from "./modifyDom.js";
function modify(data) {
    console.log(data);
    let deleteBtn = document.querySelectorAll(".delBtn");
    let detailBtn = document.querySelectorAll(".detBtn");
    data.forEach((element, i) => {
        deleteBtn[i].addEventListener("click", () => {
            location.href = `/deletePage/${element.id}`;
        });
        detailBtn[i].addEventListener("click", function () {
            modifyDom(i, divDom, data);
        });
    });
}

export { modify };
