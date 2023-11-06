import NavBar from  "../components/NavBar";
import "../components/Login.css";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

function Login() {
  function sentData(event) {
    event.preventDefault();

    //validar
    fetch("/login", {
      method: "post",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        username: document.getElementById("email").value,
        password: document.getElementById("password").value,
      }),
    });
  }
  return (
    <>
      <NavBar></NavBar>
      <div className="container-login d-flex col-9">
    <form action="" method="post" id="form" className="col-8 d-flex flex-column justify-content-around">
      <div class="form">
        <p class="warning" id="warning"></p>
      <h2 class="form__title">Login</h2>
      <p class="form__paragraph">Don't have an account yet? {<Link to="/logup">Click here</Link>}</p>

      <div class="form__container">
          <div class="form__group">
              <input type="email" id="email" class="form__input" placeholder="Email" />
              <label for="email" class="form__label"></label>
              <span class="form__line"></span>
          </div>

          <div class="form__group">
              <input type="password" id="password" class="form__input" placeholder="Password" />
              <label for="password" class="form__label"></label>
              <span class="form__line"></span>
          </div>
          <p class="form__paragraph">Forgot your password?<a href=" " class="form__link">Click here</a></p><br></br>

          <input type="submit" value="Login" class="form__submit" onClick={() =>sentData ()}/>
      </div>
    </div>
  </form>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Login;
