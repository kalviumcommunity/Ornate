import React from "react";
import "./Navbar.css";
import "../../App.css";
import logoImg from "../../Images/logon.png";
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

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

          {user && (
            <div className="elements">
              <span>{user.email}</span>
              <button onClick={handleClick}>Logout</button>
            </div>
          )}

          {!user && (
            <div>
              <button
                className="upload_button gradient_button"
                style={{ width: "9vw" }}
                onClick={() => navigate("/Form")}
              >
                Register
              </button>
            </div>
          )}
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
    </nav>
  );
};

export default Navbar;
