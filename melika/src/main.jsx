import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./Pages/About/About";
import Skill from "./Pages/Skills/Skill";
import Services from "./Pages/Services/Services";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/portfolio",
    element: <Portfolio />
  },
  {
    path: "/skill",
    element: <Skill />
  },
  {
    path: "/contact",
    element: <Contact />
  },
]);
