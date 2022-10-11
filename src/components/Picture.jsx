import React from "react";
import "../styles/picture.css";

const Picture = ({ photographer, src }) => {
  return (
    <div className="imgcontainer">
      <img src={src.large} alt="img" />
      <p>{photographer}</p>
    </div>
  );
};

export default Picture;
