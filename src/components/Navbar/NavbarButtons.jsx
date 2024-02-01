import React from "react";
import { Link } from "react-router-dom";

const NavbarButtons = () => {
  return (
    <>
      {/* Navbar knapparna */}
      <div className="relative left-[26rem] -top-40">
        <div className=" flex flex-col items-center gap-3 relative top-80 left-3/4 w-24">
          <Link to="/">
            <button className="-rotate-20 text-xl w-20 hover:scale-125">
              <span className="text-pastel-purple ">#</span>
              <span className="text-text-color">Front</span>
            </button>
          </Link>

          <Link to="/About">
            <button className="-rotate-20 text-xl w-20 hover:scale-125">
              <span className="text-pastel-blue">#</span>
              <span className="text-text-color">About</span>
            </button>
          </Link>

          <Link to="/Projects">
            <button className="-rotate-20 text-xl w-20 hover:scale-125">
              <span className="text-pastel-green">#</span>
              <span className="text-text-color">Projects</span>
            </button>
          </Link>

          <Link to="/Contact">
            <button className="-rotate-20 text-xl w-20 hover:scale-125">
              <span className="text-pastel-pink">#</span>
              <span className="text-text-color">Contact</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarButtons;
