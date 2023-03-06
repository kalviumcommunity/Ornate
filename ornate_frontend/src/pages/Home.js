import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Classification from "../components/Classification/Classification";
// import photography from "../Images/Photography.png";
import Tagline from "../components/Tagline/Tagline";
import { Link } from "react-router-dom";
import "../App.css";
import { FcLike } from "react-icons/fc";
import { CiSaveDown2 } from "react-icons/ci";
import { IoMdArrowForward } from "react-icons/io";
import man from "../Images/man.png";
import card from "../Images/card.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Classification />
      <Tagline />
      {/* Displaying Images Section*/}
      <div className="card-container">
        <div className="cards">
          {/* Image */}
          <img src={card} alt="card" className="display_class" />
          {/* overlay on hovering */}
          <div className="overlay_image">
            <div className="user_actions">
              <div id="like_section">
                <button className="like_button">
                  <FcLike className="like" />
                  {/* <FcLikePlaceholder className="like" /> */}
                </button>
              </div>

              <div id="save_section">
                <button className="save_button">
                  Save <CiSaveDown2 />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="cards">
          {/* Image */}
          <img src={card} alt="card" className="display_class" />
          {/* overlay on hovering */}
          <div className="overlay_image">
            <div className="user_actions">
              <div id="like_section">
                <button className="like_button">
                  <FcLike className="like" />
                  {/* <FcLikePlaceholder className="like" /> */}
                </button>
              </div>

              <div id="save_section">
                <button className="save_button">
                  Save <CiSaveDown2 />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="cards">
          {/* Image */}
          <img src={card} alt="card" className="display_class" />
          {/* overlay on hovering */}
          <div className="overlay_image">
            <div className="user_actions">
              <div id="like_section">
                <button className="like_button">
                  <FcLike className="like" />
                  {/* <FcLikePlaceholder className="like" /> */}
                </button>
              </div>

              <div id="save_section">
                <button className="save_button">
                  Save <CiSaveDown2 />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="cards">
          {/* Image */}
          <img src={card} alt="card" className="display_class" />
          {/* overlay on hovering */}
          <div className="overlay_image">
            <div className="user_actions">
              <div id="like_section">
                <button className="like_button">
                  <FcLike className="like" />
                  {/* <FcLikePlaceholder className="like" /> */}
                </button>
              </div>

              <div id="save_section">
                <button className="save_button">
                  Save <CiSaveDown2 />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="cards">
          {/* Image */}
          <img src={card} alt="card" className="display_class" />
          {/* overlay on hovering */}
          <div className="overlay_image">
            <div className="user_actions">
              <div id="like_section">
                <button className="like_button">
                  <FcLike className="like" />
                  {/* <FcLikePlaceholder className="like" /> */}
                </button>
              </div>

              <div id="save_section">
                <button className="save_button">
                  Save <CiSaveDown2 />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="cards">
          {/* Image */}
          <img src={card} alt="card" className="display_class" />
          {/* overlay on hovering */}
          <div className="overlay_image">
            <div className="user_actions">
              <div id="like_section">
                <button className="like_button">
                  <FcLike className="like" />
                  {/* <FcLikePlaceholder className="like" /> */}
                </button>
              </div>

              <div id="save_section">
                <button className="save_button">
                  Save <CiSaveDown2 />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="cards">
          {/* Image */}
          <img src={card} alt="card" className="display_class" />
          {/* overlay on hovering */}
          <div className="overlay_image">
            <div className="user_actions">
              <div id="like_section">
                <button className="like_button">
                  <FcLike className="like" />
                  {/* <FcLikePlaceholder className="like" /> */}
                </button>
              </div>

              <div id="save_section">
                <button className="save_button">
                  Save <CiSaveDown2 />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="cards">
          {/* Image */}
          <img src={card} alt="card" className="display_class" />
          {/* overlay on hovering */}
          <div className="overlay_image">
            <div className="user_actions">
              <div id="like_section">
                <button className="like_button">
                  <FcLike className="like" />
                  {/* <FcLikePlaceholder className="like" /> */}
                </button>
              </div>

              <div id="save_section">
                <button className="save_button">
                  Save <CiSaveDown2 />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="cards">
          {/* Image */}
          <img src={card} alt="card" className="display_class" />
          {/* overlay on hovering */}
          <div className="overlay_image">
            <div className="user_actions">
              <div id="like_section">
                <button className="like_button">
                  <FcLike className="like" />
                  {/* <FcLikePlaceholder className="like" /> */}
                </button>
              </div>

              <div id="save_section">
                <button className="save_button">
                  Save <CiSaveDown2 />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="cards">
          {/* Image */}
          <img src={card} alt="card" className="display_class" />
          {/* overlay on hovering */}
          <div className="overlay_image">
            <div className="user_actions">
              <div id="like_section">
                <button className="like_button">
                  <FcLike className="like" />
                  {/* <FcLikePlaceholder className="like" /> */}
                </button>
              </div>

              <div id="save_section">
                <button className="save_button">
                  Save <CiSaveDown2 />
                </button>
              </div>
            </div>
          </div>
        </div>

        <Link to="/Discover">
          <button id="viewmore_button">
            View more
            <IoMdArrowForward />
          </button>
        </Link>
      </div>

      {/* SIGN UP SECTION */}

      <div id="signup-shortcut">
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
      </div>

      {/* POPULAR CREATORS SECTION */}
      <div>
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
      </div>
    </div>
  );
};

export default Home;
