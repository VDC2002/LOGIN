import { Link } from "react-router-dom";
import Logo from "../assets/picture-Logo.png";
import "./LoginStyle.css";
function SignUp() {
  return (
    <div className="containerLogin">
      <img className="imgLogin" src={Logo} alt="" />
      <div className="containerText">
        <h2 className="tituleLogin">Web Development</h2>
        <label>Made easy!</label>
      </div>
      <input className="inputEmail" type="email" placeholder="email" />
      <input className="inputPassword" type="password" placeholder="password" />
      <input className="inputFullname" type="text" placeholder="full name" />
      <input className="inputUsername" type="text" placeholder="username" />
      <button className="buttonLogin">Sign Up</button>
      <div className="containerLinks">
        <Link className="linkLogin" to="/forgetpassword">
          Forgot password? <span>or</span>
        </Link>
        <Link className="linkLogin" to="/">
          {" "}
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
