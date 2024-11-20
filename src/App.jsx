import React from "react";
import { DarkModeProvider } from "./components/DarkModeContext";
import Header from "./components/Header";
import Hero from "./section/Hero";
import About from "./section/About";
import PopularAreas from "./section/PopularAreas";
import Properties from "./section/Properties";
import Client from "./section/Client";
import Services from "./section/Services";
import Contact from "./section/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <PopularAreas />
        <Properties />
        <Services />
        <Client />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </>
  );
};

export default App;
