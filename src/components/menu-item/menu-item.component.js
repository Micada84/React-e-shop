import React from "react";
import "./menu-item.style.scss";

const MenuItem = ({ title, imgUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        {/* this is the same like props.title justi this is destructured*/}
        <span className="subtitle"> SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
