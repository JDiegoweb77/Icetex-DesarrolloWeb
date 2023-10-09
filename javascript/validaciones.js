const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warning");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warning = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!regexEmail.test(email.value)){
        warning +=  `Invalid email <br>`;
        entrar = true;

    }

    if(pass.value.lenght < 8){
        warning += `Invalid password <br>`;
        entrar = true;

        console.log(pass)
    }

    if(entrar){
        parrafo.innerHTML = warning;
    }
    
})