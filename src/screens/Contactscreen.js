import React from "react";
import Hero from "../Components/Hero";
import fotocontact from "../assets/immagini/contactpage.jpg";
import Form from "../Components/Form";

const Contactscreen = () => {
  return (
    <>
      <Hero img={fotocontact}>
        <h1>Contact us</h1>
        <p>and join our community</p>
      </Hero>
      <Form />
    </>
  );
};

export default Contactscreen;
