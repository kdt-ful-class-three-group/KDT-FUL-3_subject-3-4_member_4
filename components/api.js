// let arrJson = [];

function inputDate() {
    const timeValue = document.getElementById("time");
    console.log(timeValue);

    // return timeValue;
}
inputDate();
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
              <p>${index}</p>
              <p> ${dataList[index].inputName}</p>
              <p> ${dataList[index].timestamp}</p>
            </div>
          
        `;
        }
    }
};
xhr.send();
