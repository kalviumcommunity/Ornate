import React from "react";
// importing images required
import photography from "../../Images/Photography.png";
import fashion from "../../Images/Fashion.png";
import uiux from "../../Images/UIUX.png";
import sketching from "../../Images/Sketching.png";
import illustrations from "../../Images/Illustrations.png";
import architecture from "../../Images/architecture.png";
import advertising from "../../Images/advertising.png";
// importing styling
import "./Classification.css";

const Classification = () => {
  const data = [
    {
      title: "Photography",
      image: photography,
    },
    {
      title: "Architecture",
      image: architecture,
    },
    {
      title: "Advertisement",
      image: advertising,
    },
    {
      title: "Fashion",
      image: fashion,
    },
    {
      title: "UI/UX",
      image: uiux,
    },
    {
      title: "Sketching",
      image: sketching,
    },
    {
      title: "Illustrations",
      image: illustrations,
    },
  ];

  return (
    // Claasification Section which acts as a Filter Section for sorting images.

    // Main classification Divison
    <div id="classification_section">
      {/* Different Sections Description */}

      {/* Photography Section */}
      {data.map((e, i) => {
        const style = {
          main: {
            content: e.title,
          },
        };
        return (
          <div className="classes" key={i} style={style.main}>
            {/* Image */}
            <img
              src={e.image}
              alt="photography"
              className="display_class_image"
            />
            <p>{e.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Classification;
