import React, { useEffect } from "react";
import "../App.css";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { BsCloudUpload } from "react-icons/bs";
import { useAuthContext } from "../hooks/useAuthContext";
import { useUploadContext } from "../hooks/useUploadContext";
import { MdDelete } from "react-icons/md";
import nopostbg from "../Images/nopostsbg.png";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { uploads, dispatch } = useUploadContext();

  useEffect(() => {
    const displayUploads = async () => {
      const resp = await fetch(
        `${process.env.REACT_APP_API}/api/posts/userPosts`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const json = await resp.json();

      if (resp.ok) {
        dispatch({ type: "UPLOAD", payload: json });
      }
    };

    if (user) {
      displayUploads();
    }
  }, [dispatch, user]);

  const handleDelete = async (post) => {
    if (!user) {
      return;
    }

    const resp = await fetch(
      `${process.env.REACT_APP_API}/api/posts/${post._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const json = await resp.json();

    if (resp.ok) {
      dispatch({ type: "DELETE", payload: json });
    }
  };

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
            <h1>Hey {user?.username} ,</h1>
            <h3>Email-Id :{user.email}</h3>
            <h3>Contact : 0123456789</h3>
            <div id="upload_btn">
              <button
                className="transmit_button gradient_button "
                onClick={() => navigate("/upload")}
              >
                Upload Your Designs&nbsp;&nbsp;&nbsp;
                <BsCloudUpload fontSize="1.5em" />
              </button>
            </div>
          </div>
        </div>

        <div className="profile_img">
          <img
            src="https://img.freepik.com/premium-vector/programming-software-concept-with-people-scene-vector-illustration_198565-2583.jpg?size=626&ext=jpg&uid=R96011200&ga=GA1.1.1069911503.1678599309&semt=ais"
            alt=""
          />
        </div>

        {/* Divison for showcasing posts of any particular user */}
      </div>
      <div className="per_posts">
        <h1>Your Collection ~</h1>
        {uploads && uploads.length !== 0 ? (
          <div className="posts">
            {uploads &&
              uploads.map((e, i) => {
                return (
                  <div id="post_card" key={i}>
                    <img src={e.pic} style={{ aspectRatio: "16/9" }} alt="" />
                    <div id="post_act">
                      <span>{e.title}</span>
                      <button id="del_btn" onClick={() => handleDelete(e)}>
                        Delete post&nbsp;
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="per_posts" id="no_post_div">
            <img src={nopostbg} alt="" />
            <h1>No Posts Yet</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
