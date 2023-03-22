import React from "react";
import "./Navbar.css";
import "../../App.css";
import logoImg from "../../Images/logon.png";
import { Link } from "react-router-dom";
// import back from "../../Images/Rectangle-1.svg";
// import { BiSun } from "react-icons/bi";
// import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    // NAVBAR ELEMENT
    <nav id="navbar">
      {/* Logo Divison */}
      <div id="logo">
        <Link to="/" className="">
          <img src={logoImg} alt="site logo" className="logo" />
        </Link>
      </div>

      {/* Quick Links Divison */}
      <div id="quick_links">
        <div id="navbar_links">
          <div className="elements">
            <Link to="/" className="link_text">
              Home
            </Link>
          </div>
          <div className="elements">
            <Link to="/Discover" className="link_text">
              Discover
            </Link>
          </div>
          {/* <div className="elements">
            <Link to="/Login" className="link_text">
              Login
            </Link>
          </div> */}
          <div>
            <button
              className="upload_button gradient_button"
              style={{ width: "9vw" }}
            >
              <Link to="/Form">Register</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Search Button Divison */}
      {/* <div id="search_section"> */}
      {/* <input
          type="text"
          name=""
          
          placeholder=" Search Design..."
          id="search_box"
        /> */}
      {/* <input
          class="mainLoginInput"
          type="text"
          placeholder="&#61442; Search Designs"
          id="search_box"
        /> */}
      {/* </div> */}

      {/* Backdrop divison */}
      {/* <div>
        <img src={back} alt="" id="back-image" />
      </div>

      <div>
        <button></button>
      </div> */}

      {/* Sign up/ Log In Divison */}
      {/* <div id="user_action">
        <Link to="/SignUp" id="signup">
          <button id="signup_button">Sign up</button>
        </Link>
        &nbsp;
        <Link id="login">Log In</Link>
      </div> */}
    </nav>
  );
};

export default Navbar;
