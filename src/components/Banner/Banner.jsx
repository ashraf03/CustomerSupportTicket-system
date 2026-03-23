import React from "react";
import vectorBg from "../../assets/vector1.png";
import vectorBg2 from "../../assets/vector2.png";

const Banner = ({ count, countDec }) => {
  return (
    <div className="flex gap-10 w-[1200px] mx-auto mt-6">

      {/* In Progress */}
      <div
        className="flex flex-col items-center justify-center
        w-[580px] h-[250px] rounded-lg text-white"
        style={{
          backgroundImage: `url(${vectorBg}),  linear-gradient(to right, #422AD5)`,
          // backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "left bottom",
        }}
      >
        <h1 className="text-2xl font-bold">In-Progress</h1>
        <span className="text-3xl">{count}</span>
      </div>

      {/* Resolved */}
      <div
        className="flex flex-col items-center justify-center
        w-[580px] h-[250px] rounded-lg text-white"
        style={{
          backgroundImage: `url(${vectorBg}),  linear-gradient(to bottom, #632EE3, #54CF68)`,
          backgroundPosition: "left bottom",
        }}
      >
        <h1 className="text-2xl font-bold">Resolved</h1>
        <span className="text-3xl">{countDec}</span>
      </div>

    </div>
  );
};

export default Banner;