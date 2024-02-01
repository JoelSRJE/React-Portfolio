import React from "react";

const RoadMap = () => {
  const roadMap = [
    {
      topText: "Backend course",
      smallText: "C#, MongoDB, Docker",
      bottomText: "2024 Jan.",
    },
    { topText: "UI/UX course", bottomText: "2023 Nov." },
    { topText: "Angular course", bottomText: "2023 Oct." },
    { topText: "The Budgie arrived", bottomText: "2023 Sep." },
    { topText: "React course", bottomText: "2023 Aug." },
    { topText: "JavaScript course", bottomText: "2023 May." },
    {
      topText: "Began Studying",
      smallText: "HTML5 & CSS3 Course",
      bottomText: "2023 Mar.",
    },
    { topText: "Moved to Växjö", bottomText: "2022 Aug." },
  ];

  return (
    <div className="mt-[40rem] bg-light-mode-content h-full">
      <span className="flex justify-center">My dev journey so far</span>
      <div className="flex justify-center">
        <div
          className="w-0 h-0 border-l-[12.5px] border-l-transparent
               border-b-[25px] border-b-pastel-blue
              border-r-[12.5px] border-r-transparent
                "
        ></div>
      </div>

      <div className="flex flex-col items-center">
        <div>
          <div className="relative text-text-color antialiased text-sm ">
            <div className="w-1 bg-pastel-blue absolute h-full left-1/2 transform -translate-x-1/2"></div>

            {roadMap.map((item, idx) => (
              <div key={idx} className="mb-20 relative flex items-center">
                <div className="absolute top-5 left-[50%] -translate-x-1/2 w-4 h-4 bg-pastel-blue rounded-full"></div>
                {idx !== roadMap.length - 1 && (
                  <div className="absolute top-0 left-[50%] -translate-x-1/2 h-full w-0.5 bg-pastel-blue"></div>
                )}
                <div
                  className={`relative bg-white rounded shadow p-2 ${
                    idx % 2 === 0 ? "right-[10rem]" : "left-[10rem]"
                  }`}
                >
                  <div className="border-b-2 border-b-pastel-blue text-center">
                    <span>{item.topText}</span>
                    {item.smallText && <br />}
                    {item.smallText && (
                      <span className="text-xs">{item.smallText}</span>
                    )}
                  </div>
                  <div className="text-center">
                    <span>{item.bottomText}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
