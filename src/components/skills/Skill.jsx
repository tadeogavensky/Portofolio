import React from "react";
import { useEffect } from "react";

import "./skills.css";

export const Skill = (props) => {

  return (
    <>
      <div className="item">
        <div className="circle">
          <p>{props.percentage}%</p>
        </div>
        <h5>{props.skill}</h5>
      </div>
    </>
  );
};
