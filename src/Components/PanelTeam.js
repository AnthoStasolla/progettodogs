import React from "react";
import "./Panelteam.css";

const PanelTeam = ({ titolo, ruolo, img }) => {
  return (
    <>
      <div className="d-flex container-team">
        <div className="text-center team">
          <h5>{titolo}</h5>
          <p>{ruolo}</p>
          <img
            className="rounded-circle"
            alt="avatar1"
            src={img}
            style={{
              maxWidth: "20rem",
              maxHeight: "20rem",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default PanelTeam;
