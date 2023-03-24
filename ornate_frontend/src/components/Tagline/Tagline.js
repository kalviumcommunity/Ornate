import React from "react";
// import { Link } from "react-router-dom";
import "./Tagline.css";
import { BsArrowRight } from "react-icons/bs";
// import SignUp from "../../pages/SignUp";

const Tagline = () => {
  return (
    <div id="content">
      {/* Tagline of the divison */}
      <div id="tagline">
        <div id="line_one">Let's turn it to</div>
        <div id="line_two">Extraordinary</div>
        <button className="transmit_button gradient_button ">
          Upload Your Designs
          <BsArrowRight style={{ marginLeft: "12px", scale: "1.3" }} />
        </button>
      </div>

      {/* sign in divison */}
      <div id="signIn">
        <img
          src="https://img.freepik.com/premium-photo/interface-designer-flat-illustration_250484-3247.jpg?size=626&ext=jpg&ga=GA1.1.542337575.1679558435&semt=ais"
          alt=""
        />
      </div>
    </div>
  );
};

export default Tagline;
