import React from "react";
import photography from "../../Images/Photography.png";
import fashion from "../../Images/Fashion.png";
import uiux from "../../Images/UIUX.png";
import sketching from "../../Images/Sketching.png";
import illustrations from "../../Images/Illustrations.png";
import "./Classification.css";
const Classification = () => {
  return (
    <div>
      <div>
        <ul>
          <li className="container">
            <img src={photography} alt="photography" className="image" />
            <div className="overlay">
              <div className="text">Photography</div>
            </div>
          </li>

          <li className="container">
            <img src={fashion} alt="Fashion" className="image" />
            <div className="overlay">
              <div className="text">Fashion</div>
            </div>
          </li>

          <li className="container">
            <img src={uiux} alt="UI/UX" className="image" />
            <div className="overlay">
              <div className="text">UI/UX</div>
            </div>
          </li>

          <li className="container">
            <img src={sketching} alt="Sketching" className="image" />
            <div className="overlay">
              <div className="text">Sketching</div>
            </div>
          </li>

          <li className="container">
            <img src={illustrations} alt="Illustrations" className="image" />
            <div className="overlay">
              <div className="text">Illustrations</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Classification;
