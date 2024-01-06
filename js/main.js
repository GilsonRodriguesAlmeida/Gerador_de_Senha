// variavel que inicia o tamanho da senha
let passwordLength = 16;
// campo do input, que mostra o password
const inputElpassword = document.querySelector("#password");

function generatePassword() {
    const chars = "abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVXYZ123456789?!@&*()[]";
    

    let password = ""

    //loop que gera os caracteres do password
    for(let i = 0; i < passwordLength; i++) { //passwordLength diz qual o tamanho será o password
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1) //recorta o caracter onde paraou o loop
    }

    // mostra a password gerado no input
    inputElpassword.value = password
}

// funcção que copia e cola o password "nativa do navegador"
function copy() {
    navigator.clipboard.writeText(inputElpassword.value)
}

//slider que informa o tamanho da password
const passwordLengthEl = document.querySelector("#password-length");
passwordLengthEl.addEventListener("input", function() { //escuta o input slider
    passwordLength = passwordLengthEl.value; //recebe o valor
    generatePassword(); //gera o novo password de acordo com o tamanho
})

//elemento button 
const copyBtnEl = document.querySelector("#copy");
copyBtnEl.addEventListener("click", copy);

generatePassword()