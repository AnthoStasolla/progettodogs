import React from "react";
import { FaPhone, FaSearch, FaMailBulk } from "react-icons/fa";
import { SocialBar } from "../links";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Our Purposes... </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>

            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">
                <FaSearch
                  className="mx-2"
                  style={{
                    color: "black",
                  }}
                />
                Around the World
              </h5>
              <h5 className="text-uppercase">
                <FaMailBulk
                  className="mx-2"
                  style={{
                    color: "yellow",
                  }}
                />
                dogs@gmail.com
              </h5>
              <h5 className="text-uppercase">
                <FaPhone className="mx-2" style={{ color: "green" }} />
                00 2258896556
              </h5>
            </div>
          </div>
        </div>
        <div
          className="text-center p-5"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div className="social-footer">
            <SocialBar />
          </div>
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
