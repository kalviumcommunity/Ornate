import React from "react";
import "./Tagline.css";
import { BsArrowRight } from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";

const Tagline = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  const navigate = useNavigate()

  return (
    <div id="content">

      {/* Taglone of the divison */}
      <div id="tagline">
        <div id="line_one">Let's turn it to</div>
        <div id="line_two">Extraordinary</div>
        <button className="transmit_button gradient_button " onClick={() => navigate("/upload")}
>
          Upload Your Designs
          <BsArrowRight style={{ marginLeft: "12px", scale: "1.3" }} />
        </button>
      </div>

      {/* Main image */}
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
