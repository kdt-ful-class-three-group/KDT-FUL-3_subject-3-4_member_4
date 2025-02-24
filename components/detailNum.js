async function detailNum(num) {
   fetch("http://localhost:8000/data.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            const detailTable = document.getElementById("detailTable");
            console.log(detailTable);
            // for (let index = 0; index < data.length; index++) {
            detailTable.innerHTML += `
      <div>
        <p>${data[1].id}</p>
        <p> ${data[1].inputName}</p>
        <p> ${data[1].timestamp}</p>
      </div>
    `;

            // }
        });
}
detailNum();

export { detailNum };
