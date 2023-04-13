import React from "react";
import Hero from "../Components/Hero";
import fotofind from "../assets/immagini/findimg.jpg";
import { FaSearch } from "react-icons/fa";

const Finddogscreen = () => {
  return (
    <>
      <Hero img={fotofind}>
        <h1 className="mb-5">Know more about us</h1>
        <p>Find your favorite breed</p>
      </Hero>
      <form className="form-container">
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example1">
            SEARCH BREEDS
          </label>
          <input
            type="text"
            id="form4Example1"
            className="form-control"
            placeholder="Ex...Labrador"
          />
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-outline-secondary bottone"
        >
          <FaSearch />
        </button>
      </form>
    </>
  );
};

export default Finddogscreen;
