
    const personData = JSON.parse(localStorage.getItem("personsList"));
    let tableBody = document.querySelector("#table-body");

    personData.map((person) => {
        let tData = document.createElement("tr");
        tData.id = "t-data";
        tData.innerHTML =`
            <td id="data1">${person.name}</td>
            <td id="data2">${person.surname}</td>
            <td id="data3">${person.date}</td>
        `; 
        tableBody.appendChild(tData)
    })
    
    
    console.log(personData);
