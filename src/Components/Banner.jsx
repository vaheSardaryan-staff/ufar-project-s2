import React from "react";
import "./Banner.css";

const Banner = ({ gifUrl, linkUrl, altText }) => {
  return (
    <div className="banner">
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <img src={gifUrl} alt={altText} className="banner-image" />
      </a>
    </div>
  );
};

export default Banner;