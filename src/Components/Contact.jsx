import React from "react";
import Footer from "./Common/Footer";
import "./contact.css";

export default function Contact() {
  return (
    <div>
      <div className="contact_container">
        <div className="container_con">
          <div className="head">
            <h3>Contact Me</h3>
            <p>
              Hi there, contact me to ask me about anything you have in mind.
            </p>
          </div>
          <form>
            <div className="names">
              <div className="input_group">
                <label htmlFor="first_name">First name</label>
                <input
                  type="text"
                  name=""
                  id="first_name"
                  placeholder="Enter your first name"
                />
                <span className="hint">This is a hint text to help user.</span>
              </div>
              <div className="input_group">
                <label htmlFor="last_name">Last name</label>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Enter your last name"
                  id="last_name"
                />
                <span className="hint">This is a hint text to help user.</span>
              </div>
            </div>
            <div className="input_group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="yourname@email.com"
              />
              <span className="hint">This is a hint text to help user.</span>
            </div>
            <div className="input_group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Send me a message and I'll reply you as soon as possible..."
                // cols="30"
                // rows="10"
              ></textarea>
            </div>
            <div className="rules">
              <input type="checkbox" name="rules" id="rules" />
              <label htmlFor="rules">
                You agree to providing your data to tacite who may contact you.
              </label>
            </div>
            <button type="submit" id="btn__submit">
              Send message
            </button>
          </form>
        </div>
        <div className="foot">
          <Footer />
        </div>
      </div>
    </div>
  );
}
