import React from "react";
import "./Hero.css";
import imagehero from "../assets/immagini/heroabout.jpg";

const Hero = ({ img, children }) => {
  const image = img ? img : imagehero;
  return (
    <>
      <div
        className="hero-img"
        style={{
          background: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no repeat",
          height: 700,
        }}
      >
        <div className="heading">{children}</div>
      </div>
    </>
  );
};

export default Hero;
