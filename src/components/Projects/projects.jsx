import React from "react";
import "./projects.css";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import { NavLink } from "react-router-dom";
import data from "../../data";

const Projects = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="first-page">
        <div className="title">
          <h1>My Projects</h1>
          <p>MADE WITH LOVE</p>
        </div>
      </div>
      <div className="project-cards">
        <div className="cards">
          {data.map((item, index) => (
            <a target="blank" href={item.url} key={index}>
              <div
                className="card"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${item.img})`,
                }}
              >
                <h3>{item.title}</h3>
                <p>{item.des}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="buttons">
        <NavLink to="/contact">
          <button> → Contact me </button>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
