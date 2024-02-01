import React from "react";
import AboutText from "../components/About/AboutText";
import RoadMap from "../components/About/RoadMap";
import Skill from "../components/About/Skill";

export function About() {
  return (
    <section className="h-screen flex items-center justify-center w-full">
      <div className=" h-full w-3/5 mt-40 bg-light-mode-content">
        <div>
          <AboutText />
          <RoadMap />
        </div>
      </div>
    </section>
  );
}
