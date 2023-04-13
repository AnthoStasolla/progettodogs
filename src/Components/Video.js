import React from "react";
import "./Video.css";
import videohome from "../assets/video/pexels-andrea-hamilton-3144446-1920x1080-25fps.mp4";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <>
      <div className="hero">
        <video autoPlay loop muted id="video">
          <source src={videohome} type="video/mp4" />
        </video>
        <div className="content">
          <h1>PANZER LILLI</h1>
          <p>Join our Community</p>

          <div className="d-grid gap-2 col-4 mx-auto">
            <Link
              to="/about"
              className="btn btn-lg btn-outline-secondary bottone"
            >
              About us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
