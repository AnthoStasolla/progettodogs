import React from "react";
import Hero from "../Components/Hero";
import { cardsObj, cardTeam } from "../links";
import Cards from "../Components/Cards";
import PanelTeam from "../Components/PanelTeam";
import { Link } from "react-router-dom";

const Aboutscreen = () => {
  return (
    <>
      <Hero>
        <h1 className="mb-5">Passion & Work</h1>
        <p className="mt-3">Join our community.</p>
        <div className="d-grid gap-2 col-4 mx-auto">
          <Link
            to="/contact"
            className="btn btn-lg btn-outline-secondary bottone"
          >
            Conctact Us
          </Link>
        </div>
      </Hero>
      <div className="text-team">
        <h1 className="text-center">Our Purposes</h1>
      </div>
      <div className="row row-cols-lg-3">
        {cardsObj.map((card) => {
          return <Cards key={card.id} {...card} />;
        })}
      </div>
      <div className="text-team">
        <h1 className="text-center">Our Team</h1>
      </div>
      <div className="row row-cols-lg-3">
        {cardTeam.map((card) => {
          return <PanelTeam key={card.id} {...card} />;
        })}
      </div>
    </>
  );
};

export default Aboutscreen;
