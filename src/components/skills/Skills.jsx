import React from "react";

import { Skill } from "./Skill";

import "./skills.css";

import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";

import meter3 from "../../assets/img/meter3.svg";

import {
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiReact,
  SiJava,
  SiMysql,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { GrTest } from "react-icons/gr";

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

export const Skills = () => {
  return (
    <div id="skills">
      <h1>Skills</h1>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        rewind={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="transform 1000ms ease-in-out"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <Skill percentage={75} meter={meter1} skill={"Node.js"} />
        <Skill percentage={85} meter={meter1} skill={"HTML"} />
        <Skill percentage={80} meter={meter1} skill={"CSS"} />
        <Skill percentage={60} meter={meter1} skill={"React.js"} />
        <Skill percentage={85} meter={meter1} skill={"MySQL"} />
        <Skill percentage={40} meter={meter1} skill={"JAVA"} />
      </Carousel>
    </div>
  );
};
