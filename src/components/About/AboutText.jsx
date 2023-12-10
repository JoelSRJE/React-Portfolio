import React from "react";
import Me from "../../assets/Me.png";

const AboutText = () => {
  return (
    <div>
      <div className="relative top-20">
        <span className="text-text-color">
          /../<span className="text-pastel-blue">About</span>
          <hr className="relative left-40 -top-3 border-2 border-pastel-blue w-3/4" />
        </span>

        <div>
          <div className="text-text-color">
            <span>
              Hello, I'm an aspiring
              <span className="text-pastel-blue"> Web Designer</span> and
              <span className="text-pastel-blue"> Frontend Developer</span> Who
              began his journey not that long ago
            </span>
          </div>

          <div className="text-text-color">
            <span>
              I recently moved to Växjö, Kronoberg. After a few years of living
              in Stockholm{" "}
            </span>
            <span>
              I'm currently studying at EC Vocational School, Frontend
              Development
            </span>
          </div>

          <div className="relative left-2/3">
            <img src={Me} className="relative w-44 h-44" />
            <span>
              Currently studying
              <div className="w-5 h-5 bg-pastel-blue"></div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
