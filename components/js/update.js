function update(data) {
    const id = document.getElementById("dataId").innerText;
    const inputName = document.getElementById("inputName").value;
    const timestamp = document.getElementById("dataTime").innerText;

    const updatedInfo = {
        id: id,
        inputName: inputName,
        timestamp: timestamp,
    };
    console.log(updatedInfo); // 수정해서 jsons에 넣을 객체
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
}

export { update };
