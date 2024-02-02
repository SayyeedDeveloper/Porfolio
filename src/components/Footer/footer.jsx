import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';
import logo from '../../assets/logo.png'


const footer = () => {
  return (
    <>
        <div id='' className="footer-main">
            <div className="footer-links">
                <NavLink to="/projects/#top">Projects</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className="footer-contact">
                    <h3>tursunov3830@icloud.com</h3>
                    <h3>+998902573830</h3>
            </div>
            <div className="footer-logo">
                <NavLink to="/"><img src={logo} alt="" /></NavLink>
            </div>
            <div className="footer-second">
                <div className="foooter-logo">
                    <NavLink to="/"><img src={logo} alt="" /></NavLink>
                </div>
                <div className="footer-s-contact">
                    <h3>tursunov3830@icloud.com</h3>
                    <h3>+998902573830</h3>
                </div>

            </div>
        </div>
    </>
  )
}

export default footer