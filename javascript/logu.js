const username = document.getElementById("username");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const formulario = document.getElementById("formulario");
const parrafo = document.getElementById("warnings");
const inputs = document.querySelectorAll("#formulario input");

const usernameRegax = /^[a-z0_-]{3,16}$/;
    
let = warnings = "";
let enter = false;
let regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const nameRegex = /^(?!-)[a-zA-Z-]*[a-zA-Z]$/;

formulario.addEventListener("submit", e=>{
    e.preventDefault()
    
    parrafo.innerHTML = "";

    class UI {
        alertMessage(message, cssClass){
            const alertMessage = document.createElement("div");
            alertMessage.className = `alert alert-${cssClass}`;
            alertMessage.appendChild(document.createTextNode(message));
        
            let container = document.querySelector(".form-body");
            let tableContent = document.querySelector(".form");
            container.insertBefore(alertMessage, tableContent);
            setTimeout(function () {
                document.querySelector(".alert").remove();
        
            }, 2000);
        };
        }

    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "username":
                if(usernameRegax.test(username.value)){
                    warnings += "Invalid username </br>";   
                    console.log(usernameRegax.test(e.target.value));
                }
                
            break;
            case "firstName":
                
            break;
            case "lastName":
                
            break;
            case "email":
                if(!regexEmail.test(e.target.value)) {
                    
                }else {
                    warnings +=  `Invalid email <br>`;
                }
                
            break;
            case "password":
                
            break;
            case "password":
                
            break;
            
        }
    };
    if(enter){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Complete"
    };
inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

    

/*if(!usernameRegax.test(username.content)){
   warnings += "Invalid username </br>";
   enter = true;
};*/

if(!nameRegex.test(firstName.value)) {
    //warnings += "Fisrt name too short </br>";
    enter = true;
};
/*if(firstName.value.length <6){
    warnings += "Fisrt name too short </br>";
    enter = true;
};*/

if(lastName.value.length <6){
    //warnings += "Last name too short </br>";
    enter = true;
};

if(!regexEmail.test(email.value)){
   // warnings +=  `Invalid email <br>`;
    enter = true;
};

if(!pass.value.lenght < 8){
    //warnings += `Invalid password <br>`;
}else {
    enter = true;
}

/*if(enter){
    parrafo.innerHTML = warnings
}else{
    parrafo.innerHTML = "Complete"
};*/


});