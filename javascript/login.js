const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warning");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warning = "";
    let entrar = false;
    let regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    
    parrafo.innerHTML = "";    

    if(regexEmail.test(email.value)){
        entrar = true;
    }else{
        warning += `invalid Email <br>`;
    };

    const passwordRegex = /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
    
    if(passwordRegex.test(pass.value)){
        entrar = true;
    }else {
        warning += `Invalid Password <br>`;
        console.log(passwordRegex.test(pass.value));
    };
    
    if(entrar){
        parrafo.innerHTML = "Complete";
    }else{
        parrafo.innerHTML = warning;
    };
    
});