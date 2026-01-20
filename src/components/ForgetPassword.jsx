import { Link } from "react-router-dom";
import Logo from "../assets/candado.png";
import "./LoginStyle.css";
function ForgetPassword() {
  return (
    <div className="containerLogin">
      <img className="imgLogin" src={Logo} alt="" />
      <div className="containerText">
        <h2 className="tituleLogin">Web Development</h2>
        <label>Made easy!</label>
      </div>
      <input
        className="inputEmail"
        type="email"
        placeholder="email or phone number"
      />
      <button className="buttonLogin">Send login link</button>
      <div className="containerLinks linksForget">
        <Link className="linkLogin" to="/">
          Sign In
        </Link>
        <Link className="linkLogin" to="/signup">
          {" "}
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default ForgetPassword;
