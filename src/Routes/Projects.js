import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Project1 from "../assets/Project1.jpeg";
import Project2 from "../assets/Project2.jpeg";
import Project3 from "../assets/Project3.jpeg";
import "./Projects.css";
export default function Projects() {
  return (
    <div>
      <Header />
      <h1>My Projects</h1>
      <div className="ProjectPage">
        <a href="https://github.com/learn-academy-2021-echo/cat-tinder-frontend-cat-tastrophe" target="_blank"><img src={Project1} /> CatTinder</a>
        <a href="https://github.com/learn-academy-2021-echo/lightbulb-challenge-Punjabi2021" target="_blank"><img src={Project2} /> lightbulb</a>
        <a href="https://github.com/FakeMoneyBoysDev/MoneyCat" target="_blank"><img src={Project3} /> MoneyCat</a>
      </div>
      <Footer />
    </div>
  );
}
