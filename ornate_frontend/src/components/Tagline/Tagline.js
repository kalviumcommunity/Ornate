import React from "react";
// import { Link } from "react-router-dom";
import "./Tagline.css";
import SignUp from "../../pages/SignUp";

const Tagline = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div id="content">
      {/* Taglone of the divison */}
      <div id="tagline">
        <div id="line_one">Let's turn it to</div>
        <div id="line_two">Extraordinary</div>
      </div>

      {/* sign in divison */}
      <div id="signIn">
        <h1 id="register">Register</h1>
        {/* <form onSubmit={handleSubmit}>
          <input
            class="mainLoginInput"
            type="text"
            placeholder="&#61447; Name"
          />{" "}
          <input
            class="mainLoginInput"
            type="email"
            placeholder="Email"
          />{" "}
          <input
            class="mainLoginInput"
            type="password"
            placeholder="&#61475; Password"
          />
          <input
            class="mainLoginInput"
            type="password"
            placeholder="&#61475; Confirm Password"
          />
          <button>Register</button>
        </form> */}
        <SignUp />
      </div>
    </div>
  );
};

export default Tagline;
