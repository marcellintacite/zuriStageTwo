import React from "react";
import "./Components/home.css";
import profile from "./assets/profile__img.png";
import I4G from "./assets/I4G.png";
import share from "./assets/share.png";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
