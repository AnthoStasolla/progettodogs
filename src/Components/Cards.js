import React from "react";
import "./Cards.css";

const Cards = ({ titolo, icon, testo }) => {
  return (
    <>
      <div className="pricing">
        <div className="trip-container">
          <div className="trip">
            <div className="rounded rounded-5">
              <h3>{titolo}</h3>
              <span className="bar"></span>
              <div className="icon">{icon}</div>
              <p>{testo}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
