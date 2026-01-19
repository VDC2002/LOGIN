import Logo from "../assets/picture-Logo.png";
import "./LoginStyle.css";
function Login() {
  return (
    <div className="containerLogin">
      <img className="imgLogin" src={Logo} alt="" />
      <div className="containerText">
        <h2 className="tituleLogin">Web Development</h2>
        <label>Made easy!</label>
      </div>
      <input className="inputUsername" type="text" placeholder="username" />
      <input className="inputPassword" type="password" placeholder="password" />
      <button className="buttonLogin">Login</button>
      <div className="containerLinks">
        <label className="labelLogin">
          Forgot password? <span>or</span>
        </label>
        <label className="labelLogin"> Sign Up</label>
      </div>
    </div>
  );
}

export default Login;
