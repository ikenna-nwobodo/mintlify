import React from "react";
import Nav from "./components/Nav";
import Home from "./views/Home";
import About from "./views/About";
import Features from "./views/Features";
import Reviews from "./views/Reviews";
import Get from "./views/Get";
import Footer from "./views/Footer";

function Render() {
  return (
    <div className="w-full lg:w-9/12  min-h-screen overflow-x-hidden border-secondary flex flex-col justify-center items-center gap-8 text-primary">
      <Nav />
      <Home />
      <About />
      <Features />
      <Reviews />
      <Get />
      <Footer />
    </div>
  );
}

export default Render;
