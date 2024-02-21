import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policies" element={<Privacy />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
