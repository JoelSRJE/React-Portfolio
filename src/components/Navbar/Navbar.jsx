import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarButtons from "./NavbarButtons";

export function Navbar() {
  let myName = ["J", "o", "e", "l", " ", "J", "-", "E"];

  let colors = [
    "text-pastel-purple",
    "text-pastel-blue",
    "text-pastel-green",
    "text-pastel-pink",
    " ",
    "text-pastel-yellow",
    "text-text-color",
    "text-pastel-orange",
  ];

  return (
    <div>
      <nav className="flex flex-row min-w-full fixed items-center justify-center z-10">
        <div className="bg-light-mode-content w-3/5 h-36 shadow-lg shadow-black/10">
          {/* Logo */}
          <div className="w-2/5">
            <Link to="/">
              <div className="relative left-12 top-10">
                <div className="w-4 h-4 bg-pastel-green"></div>
                <div className="relative left-8 -top-4 w-4 h-4 bg-pastel-blue"></div>
                <div className="relative left-4 -top-4 w-4 h-4 bg-pastel-purple"></div>
                <div className="relative -top-4 w-4 h-4 bg-pastel-yellow"></div>
                <div className="relative left-8 -top-8 w-4 h-4 bg-pastel-pink"></div>
                <div className="relative left-4 -top-8  w-4 h-4 bg-pastel-orange"></div>
              </div>
            </Link>
            <span className="relative left-28 bottom-10 text-xl font-bold">
              <span className="text-text-color">&lt; &gt;</span>
              {myName.map((letter, index) => (
                <React.Fragment key={index}>
                  {letter !== " " ? (
                    <span className={`inline-block ${colors[index]}`}>
                      {letter}
                    </span>
                  ) : (
                    <span key={`space-${index}`}>&nbsp;</span>
                  )}
                </React.Fragment>
              ))}{" "}
              <span className="text-text-color">&lt; / &gt;</span>
            </span>
          </div>

          <NavbarButtons />
        </div>
      </nav>
    </div>
  );
}
