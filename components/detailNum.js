function detailNum(num) {
    fetch("http://localhost:8000/data.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            const detailTable = document.getElementById("detailTable");
            console.log(detailTable);
            detailTable.innerHTML += `
              <div>
                <p>${data[num].id}</p>
                <p> ${data[num].inputName}</p>
                <p> ${data[num].timestamp}</p>
              </div>
            `;
        });
}
// detailNum();

export { detailNum };
