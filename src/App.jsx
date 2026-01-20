import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ForgetPassword from "./components/ForgetPassword";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
    </Routes>
  );
}

export default App;
