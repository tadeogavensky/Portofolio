import { React } from "react";
import { useState, useEffect } from "react";
import "./header.css";

import avatar from "../../assets/IMG_3237.jpg";

import { FaLinkedinIn, FaGithub, FaDiscord, FaCode } from "react-icons/fa";
import { ImMenu } from "react-icons/im";

export const Header = () => {
  const openMenu = () => {};

  useEffect(() => {
    const header = document.querySelector("header");
    const headerMobile = document.querySelector("#header-mobile");

    const onScroll = () => {
      if (window.scrollY > 50) {
        header.style.backgroundColor = "black";
        headerMobile.style.backgroundColor = "black";
      } else {
        header.style.backgroundColor = "transparent";
        headerMobile.style.backgroundColor = "transparent";
      }
    };

    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <header id="myHeader" className="header header-desktop">
        <b>
          Tadeo Gavensky <img src={avatar} class="avatar" />
        </b>
        <div className="right-section-header">
          <div className="menu">
            <a href="#home" className="hover-underline-animation">
              Home
            </a>
            <a href="#about" className="hover-underline-animation">
              About
            </a>
            <a href="#skills" className="hover-underline-animation">
              Skills
            </a>
            <a href="#projects" className="hover-underline-animation">
              Projects
            </a>
          </div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/tadeo-gavensky-0595b9205/">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/tadeogavensky/">
              <FaGithub />
            </a>
            <a href="https://discord.com/users/9220">
              <FaDiscord />
            </a>
          </div>
          <button>
            <a href="../../assets/TADEO GAVENSKY (2).pdf" download>
              Download Resume
            </a>
          </button>
        </div>
      </header>
      <div id="header-mobile" className="header header-mobile">
        <h1 style={{ paddingRight: "30px" }}>Tadeo Gavensky</h1>
        <img src={avatar} class="avatar" />
      </div>
    </div>
  );
};
