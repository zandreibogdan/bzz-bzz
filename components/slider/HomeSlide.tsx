import React from "react";

export const HomeSlide = ({ id, sliderImage, title, subtitle }: Slide) => {
  return (
    <div
      key={id}
      className={`!flex flex-col justify-center ${
        id % 2 == 0 ? "items-end" : "items-start"
      } bg-background border-none bg-cover bg-center w-screen h-screen z-50 !p-0 ${sliderImage}`}
    >
      <div className="w-80 m-[10%] ">
        <div className="bg-gray-900 bg-opacity-50">
          <h1 className=" ">{title}</h1>
          <h5>{subtitle}</h5>
        </div>
      </div>
    </div>
  );
};
