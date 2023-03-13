import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Classification from "../components/Classification/Classification";
// import photography from "../Images/Photography.png";
import Tagline from "../components/Tagline/Tagline";
import bgImg from "../Images/background.jpg";
import Instagram from "../Images/Instagram.png";
import Facebook from "../Images/Vector.png";
import Linkedin from "../Images/LinkedIn.png";
import Github from "../Images/GitHub.png";

// import { Link } from "react-router-dom";
import "../App.css";
// import { FcLike } from "react-icons/fc";
// import { AiFillGithub } from "react-icons/ai";
// import { CiSaveDown2 } from "react-icons/ci";
// import { IoMdArrowForward } from "react-icons/io";
// import man from "../Images/man.png";
// import card from "../Images/card.png";

const Home = () => {
  return (
    <div id="main">
      <Navbar />
      <Classification />
      <Tagline />

      {/* SIGN UP SECTION */}

      {/* <div id="signup-shortcut">
        <div className="box">
          <p>Share your work with the World</p>
          <h1>
            Become a <strong>"Creator"</strong>
          </h1>
          <Link to="/SignUp">
            <button type="button" className="button">
              Sign Up now
            </button>
          </Link>
        </div>
      </div> */}

      {/* POPULAR CREATORS SECTION */}
      {/* <div>
        <h2>Popular Creators</h2>
        <div className="creator-content">
          <div clas>
            <div className="creator-box">
              <img src={man} alt="" className="man" />
              Creator
            </div>
            <div className="creator-box">
              <img src={man} alt="" className="man" />
              Creator
            </div>
            <div className="creator-box">
              <img src={man} alt="" className="man" />
              Creator
            </div>
            <div className="creator-box">
              <img src={man} alt="" className="man" />
              Creator
            </div>
            <div className="creator-box">
              <img src={man} alt="" className="man" />
              Creator
            </div>
            <div className="creator-box">
              <img src={man} alt="" className="man" />
              Creator
            </div>
          </div>
        </div>
      </div> */}
      <img src={bgImg} alt="" className="bg-img" />
      <div id="floating_div">
        <h1>BECAUSE BORING</h1>
        <h1>
          IS BAD FOR{" "}
          <span>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            doloremque doloribus dolore, adipisci voluptate officiis recusandae
            quasi, porro deserunt necessitatibus asperiores dolorem tempora sint
            reprehenderit eligendi tenetur, fuga atque corporis.
          </span>{" "}
        </h1>
        <h1>BUSINESS</h1>
        <div id="icon_div">
          <a href="https://www.instagram.com/?utm_source=pwa_homescreen">
            <img src={Instagram} className="logos" alt="" />
          </a>

          <a href="https://www.facebook.com/">
            <img src={Facebook} className="logos" alt="" />
          </a>

          <a href="https://www.linkedin.com/in/priyanshirana/">
            <img src={Linkedin} className="logos" alt="" />
          </a>

          <a href="https://github.com/Ranapriyanshi">
            <img src={Github} className="logos" alt="" />
          </a>
        </div>
        <div id="content_divison"></div>
      </div>
    </div>
  );
};

export default Home;
