import React from "react";
import "./projects.css";

export const Project = (props) => {
  return (
    <div class="project">
      <img src={props.image} alt="" />
      <div class="container">
        <h1>{props.title}</h1>
        <a href={props.url} className="repository">Git Hub Repository</a>
      </div>
    </div>
  );
};
