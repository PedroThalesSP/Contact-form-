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
    const isValidFirstName = userNameValidation();
    const isValidSecondName = userNameValidationTwo();
    const isValidEmail = userEmailValidation();
    const isValidQueryOption = queryTypeOption();
    const isValidMessage = mensageValidation()
    const isValidCheckBox = checkBoxValidation();

    console.log({
        isValidFirstName,
        isValidSecondName,
        isValidEmail,
        isValidQueryOption,
        isValidMessage,
        isValidCheckBox
    });

    if (isValidFirstName && isValidSecondName && isValidEmail && isValidQueryOption && isValidMessage && isValidCheckBox){
        window.location.href = "success.html";
    }
    
})

//User name
function userNameValidation(){
    const firstNameValidation = firstName.value;
    console.log(firstNameValidation)

    if (firstNameValidation === ""){
       alert("Digite seu primeiro nome")
        return false;
    }
    return true;
}

//Second name
function userNameValidationTwo(){
    const secondNameValidation = secondName.value;
    console.log(secondNameValidation)

    if (secondNameValidation === ""){
        alert("Digite seu segundo nome")
        return false;
    }
    return true;
}

// Email
function userEmailValidation(){
    const emailValue = userEmail.value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!emailValue.match(emailPattern)){
        alert("Por Favor, digite um email valido")
        return false;
    }
    return true;
}

// Options
function queryTypeOption() {
    const selectedOption = document.querySelector('input[name="radio"]:checked'); // Seleciona o rádio marcado

    if (selectedOption) {
        console.log(`Opção selecionada: ${selectedOption.value}`);
        return true;
        
    } else {
        alert("Por favor, selecione um tipo de consulta.");
        return false;
    }
}

function mensageValidation (){
    const userMensage = document.getElementById('user-mensage').value.trim()

    if (userMensage === "" ){
        alert("digite sua mensagem")
        return false;
    } else {
        console.log(userMensage)
        return true;
        
    }
}

// Mensage
function checkBoxValidation (){
    const boxValidation = document.getElementById('user-checkbox');

    if(!boxValidation.checked){
        alert("Marque a caixa abaixo para prosseguir")
        return false;
    } else{ 
        console.log(`A opção foi selecionada com exito`)
        return true;
    }
}