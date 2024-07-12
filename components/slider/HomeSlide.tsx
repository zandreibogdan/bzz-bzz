import React from "react";
import BeeButton from "../bee-button/BeeButton";

export const HomeSlide = ({ id, sliderImage, title, subtitle }: Slide) => {
  return (
    <div
      key={id}
      className={`!flex flex-col justify-center ${
        id % 2 == 0 ? "items-end" : "items-start"
      } bg-background border-none bg-cover bg-center w-screen h-screen z-50 !p-0 ${sliderImage}`}
    >
      <div className=" m-[10%] ">
        <div className="bg-background bg-opacity-70">
          <h1 className="text-xl">{title}</h1>
          <h5 className="w-40">{subtitle}</h5>
          <div className="flex gap-5 my-6">
            <BeeButton size="small">Descoperă</BeeButton>
            <BeeButton variant="secondary" size="small">
              Cumpără
            </BeeButton>
          </div>
        </div>
      </div>
    </div>
  );
};
