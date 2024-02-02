import React from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_251u3mf', 'template_kx5dzcf', form.current, 'VzhyW9tnjITjZFoNB')
      .then((result) => {
          console.log(result.text);
          console.log("Sent")
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="main">
      <Navbar />
      <div className="first-page">
        <div className="title">
          <h1>CONTACT ME</h1>
          <p>SAY HELLO TO ME</p>
        </div>
      </div>
      <div className="second-page">
        <form className="contact-me" ref={form} onSubmit={sendEmail}>
          <h2>Contact me</h2>
          <div className="fill">
            <div className="inputs">
              <p>Name</p>
              <input type="text" name="from_name" placeholder="Your Name" />
            </div>
            <div className="inputs">
              <p>Email</p>
              <input type="text" name="from_email" placeholder="email@example.com" />
            </div>
          </div>
          <div className="input">
            <p>Nachricht</p>
            <input type="text" name="message" placeholder="Hello, my name is . . ." />
          </div>
          <div className="buttons">
            <button type="submit" value="Send" >Send message</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
