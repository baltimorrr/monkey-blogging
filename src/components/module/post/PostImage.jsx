import React from "react";
import { NavLink } from "react-router-dom";

const PostImage = ({ className = "", url = "", alt = "", to = null }) => {
  if (to) {
    return (
      <NavLink to={to} style={{ display: "block" }}>
        <div className={`w-full h-full object-cover ${className}`}>
          <img src={url} alt={alt} loading="lazy" className={`${className}`} />
        </div>
      </NavLink>
    );
  }
  return (
    <div className={`w-full h-full object-cover ${className}`}>
      <img src={url} alt={alt} loading="lazy" className={`${className}`} />
    </div>
  );
};

export default PostImage;
