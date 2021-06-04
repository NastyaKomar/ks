

let inpName = document.getElementById("username");
let inpCity = document.getElementById("city");
let inpIndex = document.getElementById("index");
let inpDate = document.getElementById("date");
let inpEmail = document.getElementById("email");
let inpPhone = document.getElementById("phone");
let inpPassword = document.getElementById("password");
let inpPassword2 = document.getElementById("retype_password");
let inpChlen = document.getElementsByClassName("checkbox__input")[0];

let btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click", () => {






    if (inpChlen.checked) {

        let allInputs = Array.from(document.getElementsByClassName("inp"));

        for (let i = 0; i < allInputs.length; i++) {
            if (allInputs[i].value === "") {
                alert("enter a " + allInputs[i].dataset.description);
                return;
            }

        }






        if (validate()) {
            alert("thank for registration")
            let user = new User(inpName.value, inpCity.value, inpIndex.value, inpDate.value, inpEmail.value, inpPhone.value, inpPassword.value, inpPassword2.value);
            user.log();
            user.render();

        } else {
            alert("проверьте пароль");
        }





    }




})

function validate() {
    let x = document.getElementById("password").value;
    let y = document.getElementById("retype_password").value;
    return x === y;

}
class User {
    constructor(name, city, postIndex, dateOfBirth, email, phone, password) {
        this.count = cnt();
        this.id = name + this.count;
        this.name = name;
        this.city = city;
        this.postIndex = postIndex;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.interface = `

        <p> user№${this.count} </p>
        <p> Id: ${this.id} </p>
        <p> Имя: ${this.name} </p>
        <p> Город: ${this.city} </p>
        <p> Индекс: ${this.postIndex} </p>
        <p>  Дата: ${this.dateOfBirth} </p>
        <p>  Email: ${this.email} </p>
        <p> Моб.телефон: ${this.phone} </p>
        <p> Пароль: ${this.password} </p>
        <br></br>
    `

    }
    render() {
        let elem = document.createElement("div");
        elem.id = this.id;
        elem.innerHTML = this.interface;
        let container = document.querySelector(".user_info");
        container.appendChild(elem);

    }
    log() {
        console.log(this);
    }
}


function counter() {
    let i = 0;
    return function () {
        return i++;

    }
}

let cnt = counter();
