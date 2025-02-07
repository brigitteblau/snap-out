//Mainbanner.jsx
import React from "react";
import banners from "./banners";
import Banner from "./Banner";
import "./banner.css";
import "../../../global.css";
const MapBanner= () => {
  return (
    <div className="section">
      {banners.map((banner) => (
        <Banner key={banner.id} {...banner} />
      ))}
    </div>
  );
};

export default MapBanner;