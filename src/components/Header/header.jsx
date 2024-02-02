import "./header.css";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import { NavLink } from "react-router-dom";
import htmlLogo from "../../assets/html.svg";
import cssLogo from "../../assets/css.svg";
import jsLogo from "../../assets/js.svg";
import reactLogo from "../../assets/react.svg";
import nodeLogo from "../../assets/node.svg";
import figmaLogo from "../../assets/figma.svg";
import chromeLogo from "../../assets/chrome.svg";
import vscodeLogo from "../../assets/vscode.svg";
import gitLogo from "../../assets/git.svg";
import npmLogo from "../../assets/npm.svg";
import data from "../../data";

const header = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="first-page">
        <div className="title">
          <h1>Muhammad Sayyid</h1>
          <p>WEB-DESIGNER</p>
        </div>
      </div>

      <div className="second-page">
        <div className="about-me">
          <h1>About me</h1>
          <p>
            Hi there! 👋 I'm Muhammad Sayyid Tursunov, a passionate frontend
            developer currently studying at Sharda University Uzbekistan. With
            a strong foundation in React, Tailwind CSS, Bootstrap, and Node.js,
            I love turning ideas into interactive and user-friendly web
            experiences.
          </p>
          <p>
            My journey in web development began at Andijan School Number 1, and
            since then, I've been dedicated to honing my skills and taking on
            exciting projects. Whether it's crafting pixel-perfect UIs or diving
            into the world of backend development, I enjoy the dynamic nature of
            creating for the web.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies,
            tackling coding challenges, or working on my latest project. I
            believe in the power of continuous learning and the impact that
            well-crafted code can have on the user experience.
          </p>
          <p>
            Let's connect and build something amazing together! Feel free to
            reach out via email at tursunov3830@icloud.com.
          </p>
        </div>

        <div className="my-skils">
          <h1>My Skils</h1>
          <div className="skils">
            <div className="rows">
              <div className="items">
                <img src={htmlLogo} alt="" />
                <h3>HTML</h3>
              </div>
              <div className="items">
                <img src={cssLogo} alt="" />
                <h3>CSS</h3>
              </div>
            </div>

            <div className="rows">
              <div className="items">
                <img src={jsLogo} alt="" />
                <h3>JavaScript</h3>
              </div>
              <div className="items">
                <img src={reactLogo} alt="" />
                <h3>ReactJS</h3>
              </div>
            </div>

            <div className="rows">
              <div className="items">
                <img src={nodeLogo} alt="" />
                <h3>NodeJs</h3>
              </div>
              <div className="items">
                <img src={figmaLogo} alt="" />
                <h3>Figma</h3>
              </div>
            </div>

            <div className="rows">
              <div className="items">
                <img src={chromeLogo} alt="" />
                <h3>Chrome</h3>
              </div>
              <div className="items">
                <img src={vscodeLogo} alt="" />
                <h3>VSCode</h3>
              </div>
            </div>

            <div className="rows">
              <div className="items">
                <img src={gitLogo} alt="" />
                <h3>Git</h3>
              </div>
              <div className="items">
                <img src={npmLogo} alt="" />
                <h3>NPM</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="my-skils2">
          <h1>My Skils</h1>
          <div className="skils">
            <div className="row">
              <div className="items">
                <img src={htmlLogo} alt="" />
                <h3>HTML</h3>
              </div>
              <div className="items">
                <img src={cssLogo} alt="" />
                <h3>CSS</h3>
              </div>
              <div className="items">
                <img src={jsLogo} alt="" />
                <h3>JavaScript</h3>
              </div>
              <div className="items">
                <img src={reactLogo} alt="" />
                <h3>ReactJS</h3>
              </div>
              <div className="items">
                <img src={nodeLogo} alt="" />
                <h3>NodeJs</h3>
              </div>
            </div>
            <div className="row">
              <div className="items">
                <img src={figmaLogo} alt="" />
                <h3>Figma</h3>
              </div>
              <div className="items">
                <img src={chromeLogo} alt="" />
                <h3>Chrome</h3>
              </div>
              <div className="items">
                <img src={vscodeLogo} alt="" />
                <h3>VSCode</h3>
              </div>
              <div className="items">
                <img src={gitLogo} alt="" />
                <h3>Git</h3>
              </div>
              <div className="items">
                <img src={npmLogo} alt="" />
                <h3>NPM</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-cards">
        <div className="cards">
          {data.slice(0, 2).map((item, index) => (
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
        <NavLink to="/projects">
          <button> → All Projects</button>
        </NavLink>
        <NavLink to="/contact">
          <button> → Contact me </button>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default header;
