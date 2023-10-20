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

    if(!regexEmail.test(email.value)){
        warning +=  `Invalid email <br>`;
        entrar = true;
    };
    

    if(!pass.value.lenght < 8){
        warning += `Invalid password <br>`;
        entrar = true;
    }else {
        
    }

    if(entrar){
        parrafo.innerHTML = warning
    }else{
        parrafo.innerHTML = "Complete"
    };
    
});