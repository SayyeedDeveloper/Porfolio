import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import menuLogo from '../../assets/menu-logo.png';
import closeIcon from "../../assets/close-btn.png";
import instagramLogo from "../../assets/instagram.svg";
import linkedInLogo from '../../assets/linkedin.svg';
import telegramLogo from '../../assets/telegram.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [toggleMenu]);

  return (
      <div id='top' className={`navbar ${toggleMenu ? 'menu-open' : ''}`}>
        <div className="navbar-main">
          <NavLink to='/' className="logo">
            <img src={logo} alt="Logo" />
          </NavLink>
          <img
              src={menuLogo}
              alt="Menu"
              className="menu-logo"
              onClick={() => setToggleMenu(!toggleMenu)}
          />
        </div>
        {toggleMenu && (
            <div className="menu-opened">
              <div className="menu-main">
                <div className="first">
                  <img src={closeIcon} onClick={() => setToggleMenu(false)} alt="" />
                </div>
                <div className="second">
                  <div className="left">
                    <h2>Menu</h2>
                    <div className="links">
                      <NavLink to="/" onClick={() => setToggleMenu(false)}>Home</NavLink>
                      <NavLink to="/projects" onClick={() => setToggleMenu(false)}>Projects</NavLink>
                      <NavLink to="/about" onClick={() => setToggleMenu(false)}>About</NavLink>
                      <NavLink to="/contact" onClick={() => setToggleMenu(false)}>Contact</NavLink>
                    </div>
                  </div>
                  <div className="right">
                    <h3>tursunov3830@icluod.com</h3>
                    <h3>+998902573830</h3>
                    <div className="social-media">
                      <a
                          href="https://www.instagram.com/sayyeed_developer"
                          target='blank'
                      >
                        <img src={instagramLogo} alt="" />
                      </a>
                      <a
                          href="https://www.linkedin.com/in/sayyeeddeveloper/"
                          target='blank'
                      >
                        <img src={linkedInLogo} alt="" />
                      </a>
                      <a
                          href="https://t.me/Tursunov_muhammadsayyid"
                          target='blank'
                      >
                        <img src={telegramLogo} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )}
      </div>
  );
};

export default Navbar;