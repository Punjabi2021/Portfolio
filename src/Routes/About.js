import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./About.css";
import PavanPhoto from "../assets/PavanPhoto.JPG";
export default function About() {
  return (
    <div>
      <Header />
      <div className="AboutContainer">
      <div className="PavanPhoto">
        <img src={PavanPhoto} />
      </div>
      <div className="AboutText">
        <h1>
          I'm Pavan Singh an U.S.M.C. Veteran who also is a web developer{" "}
        </h1>
        <p>
          with a vast array of knowledge in many different front end and back
          end languages, responsive frameworks, databases, and best code
          practices. My objective is simply to be the best web developer that I
          can be and to contribute to the technology industry all that I know
          and can do.
        </p>
      </div>
      </div>
      <Footer />
    </div>
  );
}
