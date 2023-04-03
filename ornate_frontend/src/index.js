import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import "./index.css";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Discover" element={<Discover />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </AuthContextProvider>
  </BrowserRouter>
);
