import React, { useState } from "react";
import Footer from "./Common/Footer";
import "./contact.css";
import validation from "../validation";

export default function Contact() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState("");
  console.log(errors);
  const handleChange = (e) => {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
    setErrors(validation(data));
  };

  const handleTexte = (e) => {
    const newData = { ...data, message: e.target.value };
    setData(newData);
    setErrors(validation(data));
  };

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
                  onChange={(e) => handleChange(e)}
                  value={data.firstName}
                  onKeyDown={(e) => handleChange(e)}
                  name="firstName"
                  id="first_name"
                  // className={errors.firstnameError && "error_input"}
                  placeholder="Enter your first name"
                  required
                />
                <span className="hint">This is a hint text to help user.</span>
                {/* {errors.firstnameError && (
                  <span className="error">{errors.firstnameError}</span>
                )} */}
              </div>
              <div className="input_group">
                <label htmlFor="last_name">Last name</label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  // className={errors.lastNameError && "error_input"}
                  value={data.lastName}
                  name="lastName"
                  onKeyDown={(e) => handleChange(e)}
                  placeholder="Enter your last name"
                  id="last_name"
                  required
                />
                <span className="hint">This is a hint text to help user.</span>
                {/* {errors.lastNameError && (
                  <span className="error">{errors.lastNameError}</span>
                )} */}
              </div>
            </div>
            <div className="input_group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                // className={errors.emailError && "error_input"}
                value={data.email}
                id="email"
                onKeyDown={(e) => handleChange(e)}
                onChange={(e) => handleChange(e)}
                placeholder="yourname@email.com"
                required
              />
              <span className="hint">This is a hint text to help user.</span>
              {/* {errors.emailError && (
                <span className="error">{errors.emailError}</span>
              )} */}
            </div>
            <div className="input_group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                // className={errors.message && "error_input"}
                value={data.message}
                placeholder="Send me a message and I'll reply you as soon as possible..."
                required
                // cols="30"
                // rows="10"
                onChange={(e) => handleTexte(e)}
                onKeyDown={(e) => handleTexte(e)}
              ></textarea>
            </div>
            <div className="rules">
              <input type="checkbox" name="rules" id="rules" required />
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
