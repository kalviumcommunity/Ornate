import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import formBack from "../Images/form_back.png";
import logoImg from "../Images/logon.png";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const Form = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const handleClick = () => {
    setLogin(!login);
  };

  return (
    <div className="user_page">
      {/* Main Form divison */}
      <div className="pop">
        {/* Illustration Side of Form */}
        <div className="potrayal">
          <div id="section_top">
            <div className="back_arrow">
              <BsFillArrowLeftSquareFill
                onClick={() => navigate("/")}
                fontSize="3em"
                fill="black"
              />
            </div>
            <div id="logo_section">
              <img src={logoImg} alt="" className="form_logo" />
            </div>
          </div>
          <div id="section_below">
            <img src={formBack} alt="" className="potray_image" />
          </div>
        </div>

        {/* Divison returning Form */}
        <div className="form_section">
          {login ? (
            <Login handleClick={handleClick} />
          ) : (
            <Register handleClick={handleClick} />
          )}
          {/* <Signup /> */}

          {/* <Register /> */}
        </div>
      </div>
    </div>
  );
};
export default Form;
