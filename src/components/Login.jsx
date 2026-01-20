import { Link } from "react-router-dom";
import Logo from "../assets/picture-Logo.png";
import "./LoginStyle.css";
function Login() {
  return (
    <form className="containerLogin">
      <img className="imgLogin" src={Logo} alt="" />
      <div className="containerText">
        <h2 className="tituleLogin">Web Development</h2>
        <label>Made easy!</label>
      </div>
      <input
        className="inputUsername"
        type="text"
        placeholder="username"
        required
      />
      <input
        className="inputPassword"
        type="password"
        placeholder="password"
        required
      />
      <button className="buttonLogin" type="submit">
        Sign In
      </button>
      <div className="containerLinks">
        <Link className="linkLogin" to="/forgetpassword">
          Forgot password? <span>or</span>
        </Link>
        <Link className="linkLogin" to="/signup">
          {" "}
          Sign Up
        </Link>
      </div>
    </form>
  );
}

export default Login;
