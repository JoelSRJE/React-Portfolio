import React from "react";
import AboutText from "../components/About/AboutText";

const About = () => {
  return (
    <section className="h-screen flex items-center justify-center w-full">
      <div className=" h-full w-3/5 mt-40 bg-light-mode-content">
        <div>
          <AboutText />
        </div>
      </div>
    </section>
  );
};

export default About;
