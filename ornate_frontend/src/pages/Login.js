import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import '../App.css'

const Login = ({handleClick}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);

    await login(email, password)
  };
  return (
    <div id="user_act">
      <form className="login" onSubmit={handleSubmit}>
        <h3 id="register">Login</h3>

        <div className="name_input">
          {/* Imput feild for Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="mainLoginInput"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        {/* Input feild for password */}
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

        {/* LOGIN button */}
        <button
          type="submit"
          id="submit"
          className="gradient_button register_button"
          disabled={isLoading}
        >
          Login
        </button>
      </form>

      <div className="login_div">
        <p>OR</p>
        <p>
          Don't have an account? <span onClick={handleClick}>Signup</span>
        </p>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Login;
