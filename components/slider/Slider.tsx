"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Slide {
  id: number;
  content: string;
}

const slides: Slide[] = [
  {
    id: 1,
    content: "1",
  },
  {
    id: 2,
    content: "2",
  },
  {
    id: 3,
    content: "3",
  },
  {
    id: 4,
    content: "4",
  },
];

const SliderComponent: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
    dotsClass: "custom-dots",
  };

  return (
    <div className="mx-auto">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="!flex justify-center items-center h-64 bg-background border border-gray-300"
          >
            <h3>{slide.content}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
