import React from "react";
import "./Navbar.css";
import "../../App.css";
import logoImg from "../../Images/logoImg.png";
import { Link } from "react-router-dom";

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
          <div className="elements">
            <Link to="/Creator" className="link_text">
              Creators
            </Link>
          </div>
        </div>
      </div>

      {/* Search Button Divison */}
      <div id="search_section">
        <input
          type="text"
          name=""
          placeholder="Search Design..."
          id="search_box"
        />
      </div>

      {/* Sign up/ Log In Divison */}
      <div id="user_action">
        <Link to="/SignUp" id="signup">
          <button id="signup_button">Sign up</button>
        </Link>
        &nbsp;
        <Link id="login">Log In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
