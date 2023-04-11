import { useState } from "react";
import "../App.css";
import uploadBg from "../Images/uploadbg.png";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useUploadContext } from "../hooks/useUploadContext";

const Upload = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { dispatch } = useUploadContext();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tag, setTag] = useState("");
  const [pic, setPic] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setTag(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user.token);

    const upload = { title, desc, tag, pic };

    const resp = await fetch(`${process.env.REACT_APP_API}/api/posts/`, {
      method: "POST",
      body: JSON.stringify(upload),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await resp.json();

    if (!resp.ok) {
      setError(json.error);
    }

    if (resp.ok) {
      setTitle("");
      setDesc("");
      setTag("");
      setPic("");
      setError(null);
      navigate("/profile");
      dispatch({type : "POST", payload : json})
    }
  };
  // console.log(user.username);
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
          <form className="user" onSubmit={handleSubmit}>
            {/* <TextField id="outlined-basic" label="Name of your Design" variant="outlined" /> */}
            <div className="upd_inpt_div">
              <input
                className="upd_inp"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
              <label className="label"> Name of your Design</label>
            </div>
            <div className="upd_inpt_div">
              <input
                className="upd_inp"
                type="text"
                onChange={(e) => setDesc(e.target.value)}
              />
              <label className="label"> Description</label>
            </div>
            <div className="upd_inpt_div">
              <input
                className="upd_inp"
                type="text"
                id="temp"
                onChange={(e) => setPic(e.target.value)}
              />
              <label className="label"> Image of Design</label>
            </div>
            <div className="upd_inpt_div">
              <p>Choose the Category of your Design</p>
            </div>
            <div className="add_tag" onChange={handleChange}>
              {/* Buttons for tags to be added with the images */}
              <input
                type="radio"
                id="r1"
                name="classification"
                className="tag_btn"
                value="Photography"
              />
              <label htmlFor="r1">Photography</label>
              <input
                type="radio"
                id="r2"
                name="classification"
                className="tag_btn"
                value="Architecture"
              />
              <label htmlFor="r2">Architecture</label>
              <input
                type="radio"
                id="r3"
                name="classification"
                className="tag_btn"
                value="Advertisment"
              />
              <label htmlFor="r3">Advertisment</label>
              <input
                type="radio"
                id="r4"
                name="classification"
                className="tag_btn"
                value="Fashion"
              />
              <label htmlFor="r4">Fashion</label>
              <input
                type="radio"
                id="r5"
                name="classification"
                className="tag_btn"
                value="UI/UX"
              />
              <label htmlFor="r5">UI/UX</label>
              <input
                type="radio"
                id="r6"
                name="classification"
                className="tag_btn"
                value="Sketching"
              />
              <label htmlFor="r6">Sketching</label>
              <input
                type="radio"
                id="r7"
                name="classification"
                className="tag_btn"
                value="Illustration"
              />
              <label htmlFor="r7">Illustration</label>
            </div>

            {error && <div>{error}</div>}

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
                Hey {user?.username},
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
