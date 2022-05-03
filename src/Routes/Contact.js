import React from "react";
import Header from '../components/Header'
import Footer from "../components/Footer";
import ContactPage from "../components/Contact";
import Linkedin from "../assets/linkedin-logo.png";
import Github from "../assets/github.png";
import Email from "../assets/envelope.png";
import './Contact.css'

export default function Contact() {
  return (
    <div>
      <Header />
      <ContactPage />
      <h3>Share your concept so I can make your website a reality</h3>
      <div className="social-icon">
      <a href="https://www.linkedin.com/in/bsingh167/" target="_blank"><img src={Linkedin} /> </a>
      <a href="https://github.com/Punjabi2021?tab=repositories" target="_blank"><img src={Github} /> </a>
      <a href="mailto:Bsingh167@gmail.com" target="_blank"><img src={Email} /> </a>
      </div>
      <Footer />
    </div>
  );
}
