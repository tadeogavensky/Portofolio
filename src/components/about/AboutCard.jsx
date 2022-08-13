import React from "react";

export const AboutCard = (props) => {
  return (
    <div className="aboutCard">
      <img src={props.image} alt="" />
      <div className="meta">
        <h4>{props.title}</h4>
        <h4>{props.year}</h4>

      </div>
    </div>
  );
};
