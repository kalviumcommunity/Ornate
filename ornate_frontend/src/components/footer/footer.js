import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../Images/logoImg.png";
import "./footer.css";
const footer = () => {
  return (
    <div>
      <Link to="/" className="footer-link">
        <img src={logoImg} alt="footer" className="footer" />
      </Link>
    </div>
  );
};

export default footer;
