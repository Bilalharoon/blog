import React from "react";
import arrow from "../../Assets/arrow.png";
import "./hero.css";
import { animateScroll as scroll } from "react-scroll";
// the hero section
const Hero = props => {
  return (
    <div className="hero-image container-fluid">
      <h1>Bilal Haroon</h1>
      <img
        id="arrow"
        src={arrow}
        onClick={clickHandler}
        className="img-fluid"
        alt=""
      />
    </div>
  );
};

const clickHandler = () => {
  scroll.scrollToBottom({ duration: 1500 });
};

export default Hero;
