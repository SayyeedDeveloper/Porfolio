import React from "react";
import "./about.css";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="first-page">
        <div className="title">
          <h1>About Me</h1>
          <p>IT’S A-ME, Sayyeed!</p>
        </div>
      </div>
      <div className="second-page">
        <div className="about-me">
          <h1>My Background</h1>
          <p>
            My academic expedition at Sharda University has been instrumental in
            broadening my horizons within the realm of web development. The
            integration of theoretical knowledge with practical experiences has
            equipped me to tackle multifaceted challenges and continually evolve
            as a versatile developer.
          </p>

          <p>
            Beyond the realms of code, my passion extends to the synergy of
            design and functionality. I firmly believe that well-crafted code is
            the backbone of aesthetically pleasing and user-centric digital
            solutions. In my leisure, I delve into emerging technologies,
            actively contribute to open-source projects, and immerse myself in
            coding challenges—a testament to my unwavering commitment to
            perpetual learning.
          </p>
        </div>
        <div className="about-me">
          <h1>My Hobbies and Interests</h1>
          <p>
            Outside the digital realm, I immerse myself in the world of
            literature, enjoying the escape that a good book provides. On the
            sports front, I'm a table tennis enthusiast, always up for a
            friendly match. Additionally, I channel my entrepreneurial spirit
            into opening and exploring new business opportunities.
          </p>

          <p>
            Let's connect and explore the endless possibilities together! Feel
            free to reach out via email at tursunov3830@icloud.com.
          </p>
        </div>
      </div>
      <div className="buttons">
        <NavLink to="/contact/contact.jsx">
          <button> → Contact me </button>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default About;
