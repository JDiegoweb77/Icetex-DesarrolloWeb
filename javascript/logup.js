const username = document.getElementById("username");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const formulario = document.getElementById("formulario");
const parrafo = document.getElementById("warnings");

formulario.addEventListener("submit", e=>{
    e.preventDefault()

    parrafo.innerHTML = "";
    
    let = warnings = "";
    let enter = false;
    let regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

console.log((username.value.length <6));
if(username.value.length <6){
   warnings += "Invalid username </br>"
};

if(firstName.value.length <6){
    warnings += "Fisrt name too short </br>"
};

if(lastName.value.length <6){
    warnings += "Last name too short </br>"
};

if(regexEmail.test(email.value)){
    warnings +=  `Invalid email <br>`;
    enter = true;
};

if(!pass.value.lenght < 8){
    warnings += `Invalid password <br>`;
    entrar = true;
}else {
    
}

if(entrar){
    parrafo.innerHTML = warnings
}else{
    parrafo.innerHTML = "Complete"
};


});