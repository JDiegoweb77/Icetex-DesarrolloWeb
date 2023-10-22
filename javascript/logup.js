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
    
    let warnings = "";
    let enter = false;
    let regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const usernameRegax = /^[a-z0_-]{3,16}$/;
    const nameRegex = /^(?!-)[a-zA-Z-]*[a-zA-Z]$/;
    const regexPass = /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;

    /*const validarPassword2 = () => {
        const pass = document.getElementById("password");
        const inputPassword2 = document.getElementById("password2");

        if(pass.value !== inputPassword2.value){

        }else{
            warnings += "Password Dont Match </br>"
        }
        console.log(pass.value !== inputPassword2.value);
    }*/

if(usernameRegax.test(username.value)){
    enter = true;
}else{
    warnings += "Invalid Username </br>";
};

if(nameRegex.test(firstName.value)){
    enter = true;
}else{
    warnings += "Invalid Name </br>"
};

if(nameRegex.test(lastName.value)){
    enter = true;
}else{
    warnings += "Invalid Last Name </br>"
};

if(regexEmail.test(email.value)){
    enter = true;
}else{
    warnings +=  `Invalid Email <br>`;
}

if(regexPass.test(pass.value)){
    enter = true;
}else {
    warnings += `Invalid Password <br>`;
}

if(enter){
    parrafo.innerHTML = "Complete"
}else{
    parrafo.innerHTML = warnings
};

});