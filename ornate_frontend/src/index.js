import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Creator from "./pages/Creator";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/SignUp" element={<SignUp />}/>
      <Route path="/Discover" element={<Discover />}/>
      <Route path="/Creator" element={<Creator />}/>
    </Routes>
  </BrowserRouter>
);
