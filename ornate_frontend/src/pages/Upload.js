import React from "react";
import "../App.css";
import uploadBg from '../Images/uploadbg.png'
import TextField from "@mui/material/TextField"
import { BsFillArrowLeftSquareFill } from "react-icons/bs";


const Upload = () => {
  return (
    <div className="user_page">
      <div className="upload_page">

        {/* Title Section*/}
        <div className="up_title">
        <div className="back_arrow2">
              <BsFillArrowLeftSquareFill
                fontSize="3em"
              fill="black"
              />
            </div>
          <h1 >Upload your creation</h1>
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
              <input className="upd_inp" type="text" />
              <label className="label"> Image of Design</label>
            </div>
            <div className="upd_inpt_div">
              <input className="upd_inp" type="text" />
              <label className="label"> Add Tags</label>
            </div>
            
          </form>
  
          {/* Side Image Section */}
          <div className="upload_display">
            <img className="upload_bg" src={uploadBg} alt="" />
          </div>
        </div>
      
        
      </div>
    </div>
  );
};

export default Upload;
