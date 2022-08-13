import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./about.css";
import "../../components/skills/skills.css";

import { AboutCard } from "./AboutCard";

import dh from "../../assets/img/dh.png";
import al from "../../assets/img/al.png";
import up from "../../assets/img/up.png";
import ef from "../../assets/img/ef.png";
import ort from "../../assets/img/ort.png";
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
export const About = () => {
  return (
    <div id="about">
      <h1>Education</h1>

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
        <AboutCard image={dh} title={"Digital House CTD"} year={"2022-2024"} />
        <AboutCard image={al} title={"Node acceleration"} year={"2022"} />
        <AboutCard image={up} title={"Marketing degree"} year={"2022-2027"} />
        <AboutCard image={ef} title={"C1 Degree"} year={"2019"} />
        <AboutCard image={ort} title={"Senior high"} year={"2014-2019"} />
      </Carousel>
    </div>
  );
};
