import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Classification from "../components/Classification/Classification";
import Tagline from "../components/Tagline/Tagline";
import bgImg from "../Images/background.jpg";
import Instagram from "../Images/Instagram.png";
import Facebook from "../Images/Vector.png";
import Linkedin from "../Images/LinkedIn.png";
import Github from "../Images/GitHub.png";
import { FcLike } from "react-icons/fc";
import { CiSaveDown2 } from "react-icons/ci";
// import { IconContext } from "react-icons";
import Card from "../Images/card.png";
import "../App.css";
import { BsFillChatLeftTextFill } from "react-icons/bs";

const data = [
  {
    image: Card,
  },
  {
    image: Card,
  },
  {
    image: Card,
  },
  {
    image: Card,
  },
  {
    image: Card,
  },
  {
    image: Card,
  },
  {
    image: Card,
  },
  {
    image: Card,
  },
  {
    image: Card,
  },
  {
    image: Card,
  },
  {
    image: Card,
  },
  {
    image: Card,
  },
  {
    image: Card,
  },
  {
    image: Card,
  },
  {
    image: Card,
  },
];

const Home = () => {
  return (
    <div id="main">
      <Navbar />
      <Tagline />
      <img src={bgImg} alt="" className="bg-img" />
      <div id="floating_div">
        <h1>BECAUSE BORING</h1>
        <h1>
          IS BAD FOR{" "}
          <span>
            {" "}
            Ornate is a design website which makes design search a blissful
            experience and a platform for budding artists to present their
            designs. So, join the community today and Let's turn it to
            Extraordinary.
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
        {/* <div id="content_divison"></div>
         */}
        <button className="chat_button">
          <BsFillChatLeftTextFill />
          Join Community Chat
        </button>
      </div>
      <div id="design_list">
        <div className="list_header">
          <h1>Explore Distinctions</h1>
          <span>
            <button className="upload_button gradient_button">
              Join Community
            </button>
          </span>
        </div>

        <Classification />
        <div id="image_content">
          <div id="filter_section">
            <form>
              <input type="text" />
            </form>
          </div>
          <div id="content_section">
            <div>
              <div className="card-container">
                {/* Individual Card */}

                {data.map(() => {
                  return (
                    <div className="cards">
                      {/* Image */}
                      <img src={Card} alt="card" className="display_class" />
                      {/* overlay on hovering */}
                        <div className="user_actions">
                          <div id="like_section">
                            <button className="like_button">
                              <FcLike className="like" />
                            </button>
                          </div>
                          <div id="save_section">
                            <button className="save_button">
                              Save <CiSaveDown2 fill="black" />
                            </button>
                          </div>
                        </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
