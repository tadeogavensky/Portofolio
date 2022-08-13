import { React } from "react";
import { useState, useEffect } from "react";
import "./header.css";

import { FaLinkedinIn, FaGithub, FaDiscord, FaCode } from "react-icons/fa";
import { ImMenu } from "react-icons/im";

export const Header = () => {

  useEffect(() => {
    const header = document.querySelector("header");
    const headerMobile = document.querySelector("#header-mobile");


    const onScroll = () => {
      if (window.scrollY > 50) {
        header.style.backgroundColor="black";
        headerMobile.style.backgroundColor="black";
      }else{
        header.style.backgroundColor="transparent";
        headerMobile.style.backgroundColor="transparent";

      }
    };
  
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <header id="myHeader" className="header header-desktop">
        <b>
          Tadeo Gavensky <FaCode size={20} />
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
            <a href="">
              <FaLinkedinIn />
            </a>
            <a href="">
              <FaGithub />
            </a>
            <a href="">
              <FaDiscord />
            </a>
          </div>
         <button> <a href="#connect">Let's Connect</a></button>
        </div>
      </header>
      <div id="header-mobile" className="header header-mobile">
        <FaCode size={30} />
        <ImMenu size={30} />
      </div>
    </div>
  );
};
