import NavBar from  "../components/NavBar";
import Footer from "../components/footer";
import "../components/logup.css";
import { Link } from "react-router-dom";

function Logup() {
  function sentData(event) {
    event.preventDefault();

    //validar
    fetch("/logup", {
      method: "post",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        username: document.getElementById("username").value,
        firstName: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      }),
    });
  }
  return (
    <>
    <NavBar></NavBar>
    <div className="container-logup d-flex col-9">
    <form method="post" id="formulario">
            <div id="formu" class="formulario">
            <h2 class="form__title">Create Account</h2>
            <p class="form__paragraph">Already have account?{<Link to="/login">Login here</Link>}</p>
      
            <div class="form__container">
                <div class="form__group">
                    <input type="text" name="username" id="username" class="form__input" placeholder="Username" />
                    <label for="username" class="form__label"></label>
                    <span class="form__line"></span>
                </div>
      
                <div class="form__group">
                  <input type="text" name="firstName" id="first-name" class="form__input" placeholder="First Name" />
                  <label for="first-name" class="form__label"></label>
                  <span class="form__line"></span>
                </div>

                <div class="form__group">
                    <input type="text" name="lastName" id="last-name" class="form__input" placeholder="Last Name" />
                    <label for="last-name" class="form__label"></label>
                    <span class="form__line"></span>
                  </div>

                  <div class="form__group">
                    <input type="email" name="email" id="email" class="form__input" placeholder="Email" />
                    <label for="password" class="form__label"></label>
                    <span class="form__line"></span>
                </div>
        
                  <div class="form__group">
                      <input type="password" name="password" id="password" class="form__input" placeholder="Password" />
                      <label for="password" class="form__label"></label>
                      <span class="form__line"></span>
                      
                  </div>
                
                <div>
                    <span class="conditions"><input type="checkbox" />   I accept terms and conditions</span>
                    <input type="submit" class="form__submit" value="Register" />
                    <p class="warnings" id="warnings"></p>
                  </div>
                </div>
              </div>
            </form>
        </div>
      <Footer></Footer>
    </>
  );
}
export default Logup;