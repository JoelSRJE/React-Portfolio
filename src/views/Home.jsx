import React from "react";
import HomeLogo from "../components/Home/HomeLogo";
import HomeText from "../components/Home/HomeText";
import Footer from "../components/Footer/Footer";

export function Home() {
  return (
    <section className="h-screen flex items-center justify-center w-full">
      <div className=" h-full w-3/5 mt-40 bg-light-mode-content">
        <div className="relative top-20">
          <span className="text-text-color text-lg">
            /<span className="text-pastel-purple ">Frontpage</span>
            <hr className="relative left-40 -top-3 border-2 border-pastel-purple w-3/4" />
          </span>
        </div>
        <HomeLogo />
        <HomeText />
        <Footer />
      </div>
    </section>
  );
}
