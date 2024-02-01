import React from "react";

const HomeText = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative left-20 top-60">
        <div className="relative left-8">
          <span className="text-4xl font-medium text-text-color">
            Hello, my name is <span className="text-pastel-purple">Joel</span>
          </span>
        </div>

        <div className="relative right-10 top-32 ">
          <span className="text-2xl font-medium text-text-color">
            I've just begun my journey in
            <span className="text-pastel-purple"> web design</span>
            <br />
            and <span className="text-pastel-purple">Frontend Development</span>
          </span>
        </div>

        <div className="relative left-20 text-2xl top-72 font-medium">
          <span className="text-pastel-purple">Scroll </span>
          <span className="text-text-color">to </span>
          <span className="text-pastel-purple">continue </span>
          <span className="text-text-color">reading</span>
        </div>

        <div className="relative top-96">
          <span className="text-2xl font-medium text-text-color">
            Thank you for visiting my portfolio!
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeText;
