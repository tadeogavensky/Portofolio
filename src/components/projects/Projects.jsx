import React from "react";

import { Project } from "./Project";

import "./projects.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Projects = () => {
  return (
    <div id="projects">
      <h1>Projects</h1>

      <div className="projects">
        <Project
          url={"https://github.com/tadeogavensky/grupo_3_proyectoIntegrador"}
          title={"Loop Station E-commerce"}
        />

        <Project
          url={"https://github.com/Carolina053Peke/OT176"}
          title={"Alkemy Node Project"}
        />
         <Project
          url={"https://github.com/tadeogavensky/BackendAlkemy"}
          title={"Alkemy Backend Challenge"}
        />
          <Project
          url={"https://github.com/tadeogavensky/RealTimeCPU"}
          title={"Real Time CPU Graphics"}
        />
      </div>
    </div>
  );
};
