import { useState, useEffect } from "react";
import headerImg from "../../assets/img/header-img.svg";
import "./main.css";

import { BsFillArrowRightCircleFill } from "react-icons/bs";

import TrackVisibility from "react-on-screen";

export const Main = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Full Stack Dev",
    "Certified Tech Dev",
    "Marketing student",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="main">
      <div className="presentation">
        <h3 className="tagline">This is my Portofolio</h3>

        <h1>
          {`Hi human!👨‍🚀🚀 `} <br />
          <span
            className="txt-rotate"
            dataPeriod="1000"
            data-rotate='"Full Stack Developer", "Data Analyst", "Marketing student" '
            style={{ color: "#9400ff" }}
          >
            <span className="wrap">{text}</span>
          </span>
        </h1>
        <div className="image-mobile">
          <img src={headerImg} alt="Header Img" />
        </div>
        <p>
          Hi, I’m Tadeo! A young Software Developer who is thrilled about
          everything that comes with programming and technology. I love backend
          as much as frontend, both have the best of worlds, creating a huge
          structure of code that the user won’t be able to see but will much
          appreciate, and building nice and minimalist sites that make the user
          feel comfortable navigating the frontend side.
        </p>

        <button>
          <a href="#connect">
            Join my Network <BsFillArrowRightCircleFill size={20} />{" "}
          </a>
        </button>
      </div>
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <div
              className={isVisible ? "animate__animated animate__fadeIn" : ""}
            >
              <div className="image-desktop">
                <img src={headerImg} alt="Header Img" />
              </div>
            </div>
          </div>
        )}
      </TrackVisibility>
    </div>
  );
};
