import React from "react";
import "./home.css";
import profile from "./../assets/profile__img.png";
import I4G from "./../assets/I4G.png";
import share from "./../assets/share.png";
import dot from "./../assets/dot.png";
import cam from "./../assets/cam.png";
import slack from "./../assets/slack.png";
import z from "./../assets/zuri.png";
import icon from "./../assets/github-logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [active, setActive] = useState(false);
  return (
    <div className="home">
      <div className="container">
        <div
          className="icon"
          onMouseOver={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          {active ? (
            <div className="share_tool">
              <p>Share Link</p>
              <div className="shape"></div>
            </div>
          ) : null}
          <span className="dot">
            <img src={dot} alt="iyi" />
          </span>
          <span className="fa">
            <img src={share} alt="" />
          </span>
        </div>
        <section className="profile_section">
          <div className="img">
            <div className="img_shape">
              <img src={cam} alt="" />
            </div>
            <img src={profile} alt="" id="profile_img" />
          </div>
          <span id="twitter">Annette Black</span>
          <span id="slack">Annette Black</span>
        </section>
        <section id="links_section">
          <a href="https://training.zuri.team/" id="btn_zuri">
            Zuri team
          </a>
          <a href="http://books.zuri.team " id="books">
            Zuri Book
          </a>
          <a
            href="https://books.zuri.team/python-for-beginners?ref_id=<marcellintacite>"
            id="book__python"
          >
            Python books
          </a>

          <a href="https://background.zuri.team" id="pitch">
            Background Check for coders
          </a>

          <a href="https://books.zuri.team/design-rules" id="book__design">
            Design books
          </a>
          <Link to="/contact" id="contact">
            Contact Me
          </Link>
        </section>
        <section className="icon_foot">
          <img src={slack} alt="oui" />
          <img src={icon} alt="oui" />
        </section>
        <footer>
          <img src={z} alt="Zuri intershop" />
          <p>HNG Internship 9 Frontend Task</p>
          <img src={I4G} alt="Zuri intershop" />
        </footer>
      </div>
    </div>
  );
}
