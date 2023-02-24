import React from "react";
import "./Navbar.css";
import logoImg from "../../Images/logoImg.png";
import { Link } from "react-router-dom";
// import {IoIosSearch} from'react-icons/io';

const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <Link to="/" className="">
            <img src={logoImg} alt="site logo" className="logo" />
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/Home" className="">
                Home
              </Link>
            </li>
            <li>
              <Link className="/Discover">Discover</Link>
            </li>
            <li>
              <Link className="/Creator">Creators</Link>
            </li>
            <li>
              <div>
                <input type="text" name="" placeholder="Search..." id="" />
                <div className="search">{/* <IoIosSearch /> */}</div>
              </div>
            </li>

            <li>
              <Link className="/SignUp">Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
