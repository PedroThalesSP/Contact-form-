const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const secondName = document.getElementById ("secont-name");
const userEmail = document.getElementById ("user-email");
const queryType = document.getElementsByName ("user-enquiry");
const mensage = document.getElementById("user-mensage");
const checkBox = document.getElementById("user-checkbox");
const userSubmit = document.getElementById("user-submit");

form.addEventListener("submit", (event) => {
    event.preventDefault();



    userNameValidation();
})

function userNameValidation(){
    const firstNameValidation = firstNameName.value;
    console.log(firstNameValidation)

    if (firstNameValidation === ""){
        errorInput(username, "Digite seu primeiro nome" )
    }

}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")
    textMessage.innerText = message;
    formItem.className = "form-content error"
}