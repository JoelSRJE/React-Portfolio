import React from "react";
import Me from "../../assets/Me.png";
import Budgie from "../../assets/Budgie.png";

const AboutText = () => {
  return (
    <div>
      <div className="relative top-20">
        <span className="text-text-color text-lg">
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

          <div className="absolute left-2/3">
            <img src={Me} className="relative w-44 h-44" />

            <span className="relative left-6">
              Currently studying
              <div className="relative bottom-5 right-6 w-5 h-5 bg-pastel-blue"></div>
            </span>
          </div>

          {/* <div>
            <img src={Budgie} />
            <span>
              Currently biting stuff
              <div className="w-5 h-5 bg-pastel-blue"></div>
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutText;
