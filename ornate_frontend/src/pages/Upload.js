import React from "react";
import "../App.css";
import uploadBg from "../Images/uploadbg.png";
import TextField from "@mui/material/TextField";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Upload = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  return (
    <div className="user_page">
      <div className="upload_page">
        {/* Title Section*/}
        <div className="up_title">
          <div className="back_arrow2">
            <BsFillArrowLeftSquareFill
              onClick={() => navigate("/")}
              fontSize="3em"
              fill="black"
            />
          </div>
          <h1>Upload your Creation</h1>
        </div>

        <div id="user_actions">
          {/* Main upload Form */}
          <form className="user">
            {/* <TextField id="outlined-basic" label="Name of your Design" variant="outlined" /> */}
            <div className="upd_inpt_div">
              <input className="upd_inp" type="text" />
              <label className="label"> Name of your Design</label>
            </div>
            <div className="upd_inpt_div">
              <input className="upd_inp" type="text" />
              <label className="label"> Description</label>
            </div>
            <div className="upd_inpt_div">
              <input className="upd_inp" type="text" id="temp" />
              <label className="label"> Image of Design</label>
            </div>
            <div className="upd_inpt_div">
              <input className="upd_inp" type="text" />
              <label className="label"> Add Tags</label>
            </div>
            <div className="add_tag">
              {/* Buttons for tags to be added with the images */}
              <button className="tag_btn">Photography</button>
              <button className="tag_btn">Architecture</button>
              <button className="tag_btn">Advertisment</button>
              <button className="tag_btn">Fashion</button>
              <button className="tag_btn">UI/UX</button>
              <button className="tag_btn">Sketching</button>
              <button className="tag_btn">Illustration</button>
            </div>

            {/* Upload Button Divison */}
            <div id="btn_div">
              <button
                type="submit"
                className="gradient_button "
                id="upload_button"
              >
                Upload
              </button>
            </div>
          </form>

          {/* Side Image Section */}
          <div className="upload_display">
            <div className="prnt_cnt">
              <div className="upd_cont">
                Hey {user.email},
                <br />
                Welcome to Ornate. We are excited to have you join our community
                and share your unique designs with the world.
              </div>
            </div>

            <img className="upload_bg" src={uploadBg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
