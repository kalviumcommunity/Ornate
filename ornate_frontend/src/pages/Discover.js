import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Classification from "../components/Classification/Classification";
import Card from "../Images/card.png";
// import { Link } from "react-router-dom";
import "../App.css";
import { FcLike } from "react-icons/fc";
// import { FcLikePlaceholder } from "react-icons/fc";
import { CiSaveDown2 } from "react-icons/ci";
import { IconContext } from "react-icons";
const Discover = () => {
  return (
    <div>
      {/* Returning NAVBAR */}
      <Navbar />

      {/* Rerturning Classification Section */}
      <Classification />

      {/* Division to diaplay images */}
      <div className="card-container">
        {/* Indivisual Card */}

        <div className="cards">
          {/* Image */}
          <img src={Card} alt="card" className="display_class" />
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
          <img src={Card} alt="card" className="display_class" />
          {/* overlay on hovering */}
          <div className="overlay_image">
            <div className="user_actions">
              <div id="like_section">
                <button className="like_button">
                  <IconContext.Provider value={{ color: "white" }}>
                  <FcLike className="like" style={{ color: "white" }} />
                  </IconContext.Provider>
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
          <img src={Card} alt="card" className="display_class" />
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
          <img src={Card} alt="card" className="display_class" />
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
          <img src={Card} alt="card" className="display_class" />
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
          <img src={Card} alt="card" className="display_class" />
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
          <img src={Card} alt="card" className="display_class" />
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
          <img src={Card} alt="card" className="display_class" />
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
          <img src={Card} alt="card" className="display_class" />
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
          <img src={Card} alt="card" className="display_class" />
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
          <img src={Card} alt="card" className="display_class" />
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
          <img src={Card} alt="card" className="display_class" />
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
          <img src={Card} alt="card" className="display_class" />
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
          <img src={Card} alt="card" className="display_class" />
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
          <img src={Card} alt="card" className="display_class" />
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
          <img src={Card} alt="card" className="display_class" />
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
          <img src={Card} alt="card" className="display_class" />
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
          <img src={Card} alt="card" className="display_class" />
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
          <img src={Card} alt="card" className="display_class" />
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
          <img src={Card} alt="card" className="display_class" />
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
          <img src={Card} alt="card" className="display_class" />
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
          <img src={Card} alt="card" className="display_class" />
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
          <img src={Card} alt="card" className="display_class" />
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
      </div>
    </div>
  );
};

export default Discover;
