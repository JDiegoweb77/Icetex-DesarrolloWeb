const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warning");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warning = "";
    let entrar = false;
    let regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const passwordRegex = /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
    
    parrafo.innerHTML = "";    

    if(!regexEmail.test(email.value)){
        warning +=  `Invalid email <br>`;
        entrar = true;
    };
    
    if(!passwordRegex.test(pass)) {
        warning += `Invalid password <br>`;
    }else {
        entrar = true;
    }; 
   
    if(entrar){
        parrafo.innerHTML = warning;
    }else{
        parrafo.innerHTML = "Complete";
    };
    
});