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
        <AboutCard file={"https://www.digitalhouse.com/ar/productos/programacion/certified-tech-developer"} image={dh} title={"CTD Career"} year={"2022-2024"} />
        <AboutCard file={"../../assets/fullstack.pdf"} image={dh} title={"Full Stack Course"} year={"2021-2022"} />
        <AboutCard file={"https://www.efset.org/cert/6w6uTJ"} image={ef} title={"EF SET C2-Proficient Degree"} year={"2022"} />
        <AboutCard file={"https://assets.alkemy.org/certificates/auth0%7C61fa950fcc6dfb006c5ef2ad/e0bcbe79-8b4b-4040-b74e-559bced4e655.pdf"} image={al} title={"Node acceleration"} year={"2022"} />
        <AboutCard file={"https://www.palermo.edu/carreras/marketing-modalidad-online/?gclid=Cj0KCQjwuuKXBhCRARIsAC-gM0jOWlKTqjHGKw4VgD7xrVIbfxkTlsj0cwcU1Y5lP8EdCln-N8rychsaAkuGEALw_wcB"} image={up} title={"Marketing degree"} year={"2022-2027"} />
        <AboutCard file={"../../assets/EF C1.pdf"} image={ef} title={"C1 Degree"} year={"2019"} />
        <AboutCard file={"https://media-exp1.licdn.com/dms/document/C4E2DAQHVdLF0mfRFgA/profile-treasury-document-pdf-analyzed/0/1612204274367?e=1661385600&v=beta&t=-Nsg94EkTqiN3C_3xFry6Hiv9hgMjzh6bfhZiNvWvOM"} image={ort} title={"Senior high"} year={"2014-2019"} />
      </Carousel>
    </div>
  );
};
