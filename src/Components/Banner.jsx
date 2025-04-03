import React from "react";
import "./Banner.css";

const Banner = ({ jpgUrl, linkUrl, altText }) => {
  return (
    <div className="banner">
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <img src={jpgUrl} alt={altText} className="banner-image" />
      </a>
    </div>
  );
};

export default Banner;