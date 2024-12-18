const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const secondName = document.getElementById ("second-name");
const userEmail = document.getElementById ("user-email");
const mensage = document.getElementById("user-mensage");
const checkBox = document.getElementById("user-checkbox");
const userSubmit = document.getElementById("user-submit");

form.addEventListener("submit", (event) => {
    //tratamento para  que a página não carregue
    event.preventDefault();


    // funções chamadas
    userNameValidation();
    userNameValidationTwo();
    userEmailValidation();
    queryTypeOption();
})

//User name
function userNameValidation(){
    const firstNameValidation = firstName.value;
    console.log(firstNameValidation)

    if (firstNameValidation === ""){
       alert("Digite seu primeiro nome")
    }

}

//Second name
function userNameValidationTwo(){
    const secondNameValidation = secondName.value;
    console.log(secondNameValidation)

    if (secondNameValidation === ""){
        alert("Digite seu segundo nome")
    }
}

// Email
function userEmailValidation(){
    const emailValue = userEmail.value;
    console.log(emailValue);
}

// Options
function queryTypeOption() {
    const selectedOption = document.querySelector('input[name="radio"]:checked'); // Seleciona o rádio marcado

    if (selectedOption) {
        console.log(`Opção selecionada: ${selectedOption.value}`);
    } else {
        alert("Por favor, selecione um tipo de consulta.");
    }
}
