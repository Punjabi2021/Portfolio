import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import Computer from "../assets/computer.jpg";
import "../components/Home.css";
export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <div class="Computer">
        <img src={Computer} />
      </div>
      <Footer />
    </>
  );
}
