import { useState } from "react";
import { useRegister } from "../hooks/useRegister";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Register = ({ handleClick }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const { register, isLoading, error } = useRegister();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email);
    await register(name, email, password, confirmpassword);
    navigate("/");
  };
  return (
    <div className="user_act">
      <form className="register" onSubmit={handleSubmit}>
        <h3 id="register">Register</h3>
        <div className="name_input">
          <input
            type="name"
            name="name"
            placeholder="Name"
            className="mainLoginInput"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="name_input">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="mainLoginInput"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="name_input">
          <input
            type="password"
            name="password"
            placeholder="&#61475; Password"
            className="mainLoginInput"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="name_input">
          <input
            type="password"
            name="confirmpassword"
            placeholder="&#61475; Confirm Password"
            className="mainLoginInput"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmpassword}
          />
        </div>

        <button
          type="submit"
          id="submit"
          className="gradient_button register_button"
          disabled={isLoading}
        >
          Register
        </button>
      </form>
      <div className="login_div">
        <p>OR</p>
        <p>
          Already have an account? <span onClick={handleClick}>Login</span>
        </p>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Register;
