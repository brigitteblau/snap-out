import React, { useState } from "react";
import "./banner.css";
import "../../../global.css";

const Banner = ({ title, description, moreInfo, icon: Icon }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="banner">
      <div className="banner-header">
        <span className="icon"><Icon /></span> {/* ✅ Usar la función */}
        <h2>{title}</h2>
      </div>
      <p>{description}</p>

      {!expanded ? (
        <button 
          onClick={() => setExpanded(true)} 
          className="learn-more" 
          aria-expanded={expanded}
        >
          Learn More
        </button>
      ) : (
        <>
          <div className="expanded-content">
            <div className="div-button">
              <button 
                onClick={() => setExpanded(false)} 
                className="close" 
                aria-label="Close"
              >
              </button>
            </div>
            <p>{moreInfo}</p>
          </div>
        </>
      )}
    </div>
  );
};
export default Banner;