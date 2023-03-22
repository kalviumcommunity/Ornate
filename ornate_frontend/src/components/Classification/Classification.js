import React from "react";
// importing images required
import photography from "../../Images/Photography.png";
import fashion from "../../Images/fashion.png";
import uiux from "../../Images/UIUX.png";
import sketching from "../../Images/Sketching.png";
import illustrations from "../../Images/Illustrations.png";
import architecture from "../../Images/architecture.png";
import advertising from "../../Images/advertising.png";
// importing styling
import "./Classification.css";

const Classification = () => {
  return (
    // Claasification Section which acts as a Filter Section for sorting images.

    // Main classification Divison
    <div id="classification_section">
      {/* Different Sections Description */}

      {/* Photography Section */}
      <div className="classes">
        {/* Image */}
        <img
          src={photography}
          alt="photography"
          className="display_class_image"
        />
        {/* Overlay */}
        <div className="overlay">
          <div className="text">Photography</div>
        </div>
      </div>

      {/* Architecture Section */}
      <div className="classes">
        {/* Image */}
        <img
          src={architecture}
          alt="architecture"
          className="display_class_image"
        />
        {/* Overlay */}
        <div className="overlay">
          <div className="text">Architecture</div>
        </div>
      </div>

      {/* Advertising Section */}
      <div className="classes">
        {/* Image */}
        <img
          src={advertising}
          alt="advertising"
          className="display_class_image"
        />
        {/* Overlay */}
        <div className="overlay">
          <div className="text">Advertisment</div>
        </div>
      </div>

      {/* Fashion Section */}
      <div className="classes">
        {/* Image */}
        <img src={fashion} alt="Fashion" className="display_class_image" />
        {/* Overlay */}
        <div className="overlay">
          <div className="text">Fashion</div>
        </div>
      </div>

      {/* UI/UX Section */}
      <div className="classes">
        {/* Image */}
        <img src={uiux} alt="UI/UX" className="display_class_image" />
        {/* Overlay */}
        <div className="overlay">
          <div className="text">UI/UX</div>
        </div>
      </div>

      {/* Sketching Section */}
      <div className="classes">
        {/* Image */}
        <img src={sketching} alt="Sketching" className="display_class_image" />
        {/* Overlay */}
        <div className="overlay">
          <div className="text">Sketching</div>
        </div>
      </div>

      {/* Illustrations Section */}
      <div className="classes">
        {/* Image */}
        <img
          src={illustrations}
          alt="Illustrations"
          className="display_class_image"
        />
        {/* Overlay */}
        <div className="overlay">
          <div className="text">Illustrations</div>
        </div>
      </div>
    </div>
  );
};

export default Classification;
