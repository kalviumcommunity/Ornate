import React from "react";
import "../App.css";
import Navbar from "../components/Navbar/Navbar";
import { Navigate, useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import post from "../Images/uploadbg.png";
import { useAuthContext } from "../hooks/useAuthContext";

const posts = [
  { image: post },
  { image: post },
  { image: post },
  { image: post },
];

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  return (
    <div className="profile_page">
      {/* Navbar of the Profile Page */}
      <div id="header">
        <Navbar />
      </div>

      {/* Main content Section */}
      <div className="profile_content">
        <div className="left_pannel">
          {/* User Details Section */}
          <div className="per_details">
            <h1>Hey ,</h1>
            <h3>Date of Birth : 09 November 2004</h3>
            <h3>Email-Id :{user.email}</h3>
            <h3>Contact : 0123456789</h3>
            <div id="upload_btn">
              <button
                className="transmit_button gradient_button "
                onClick={() => navigate("/upload")}
              >
                Upload Your Designs
                <BsArrowRight style={{ marginLeft: "12px", scale: "1.3" }} />
              </button>
            </div>
          </div>
        </div>

        <div className="profile_img">
          <img
            src="https://img.freepik.com/premium-vector/programming-software-concept-with-people-scene-vector-illustration_198565-2583.jpg?size=626&ext=jpg&uid=R96011200&ga=GA1.1.1069911503.1678599309&semt=ais"
            alt=""
            srcset=""
          />
        </div>

        {/* Divison for showcasing posts of any particular user */}
      </div>
      <div id="per_posts">
        <h1>Your Collection ~</h1>
        <div className="posts">
          {posts.map(() => {
            return (
              <div id="post_card">
                <img src={post} alt="" />
                <span>Albetos</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
