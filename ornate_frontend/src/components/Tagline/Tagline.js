import React from "react";
// import { Link } from "react-router-dom";
import "./Tagline.css";

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
        {/* <SignUp /> */}
        {/* <img src={mainImage} alt="" style={{ height: "400px" }} /> */}
      </div>
    </div>
  );
};

export default Tagline;
