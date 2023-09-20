const names = document.querySelector("#addName")
const surnames = document.querySelector("#addSurname")
const dates = document.querySelector("#addDate")
const button = document.querySelector("#addbtn")
const persons = []


addbtn.addEventListener("click", () => {
    if ( names.value !== "" && surnames.value !== "" && dates.value !== ""){
        addClass()
        names.value = ""
        surnames.value = ""
        dates.value = ""
    }
})

function addClass() {
    let addPerson = new Person(names.value, surnames.value, dates.value)
    persons.push(addPerson)
    let setPerson = JSON.stringify(persons)
    localStorage.setItem("personsList", setPerson)
    return
    // console.log(localStorage.setItem("persons", setPerson))
}

class Person {
    constructor(name, surname, date) {
        this.name = name;
        this.surname = surname;
        this.date = date;
    }
}


