// function detailNum(id) {
// location.href = `/detailPage/${id}`;
// console.log(id);
fetch("http://localhost:8000/data.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data-index);
        console.log(data);
        // let detailBtn = document.querySelectorAll(".detBtn");
        const detailData = data.find((item, index) => item[index].id == id);
        console.log(detailData);
        // const detailTable = document.getElementById("detailTable");
        // detailTable.innerHTML += `
        //     <div>
        //       <p>${data[num].id}</p>
        //       <p> ${data[num].inputName}</p>
        //       <p> ${data[num].timestamp}</p>
        //     </div>
        //   `;
    });
// }
// detailNum();
// export { detailNum };

// document.addEventListener("DOMContentLoaded", () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const id = urlParams.get("id");
//     console.log(id);

//     if (id) {
//         fetch(`http://localhost:8000/getDetailData?id=${id}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 const detailTable = document.getElementById("detailTable");

//                 if (data) {
//                     detailTable.innerHTML = `
//                     <div>
//                         <p>${data.id}</p>
//                         <p>${data.inputName}</p>
//                         <p>${data.timestamp}</p>
//                     </div>
//                 `;
//                 } else {
//                     detailTable.innerHTML = "<p>데이터를 찾을 수 없습니다.</p>";
//                 }
//             })
//             .catch((error) => console.error("Error fetching data:", error));
//     }
// });
